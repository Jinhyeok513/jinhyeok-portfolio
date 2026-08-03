from __future__ import annotations

from dataclasses import asdict, dataclass
from typing import Any, Iterable

import numpy as np
import pandas as pd


FEATURE_COLUMNS = [
    "Open",
    "High",
    "Low",
    "Close",
    "Adj Close",
    "Volume",
    "ret_1",
    "logret_1",
    "ma_5",
    "ma_10",
    "ma_20",
    "mom_5",
    "mom_10",
    "mom_20",
    "vol_10",
    "vol_20",
    "rsi14",
    "vol_z",
]


@dataclass(frozen=True)
class EvaluationResult:
    model: str
    ACC: float
    F1: float
    ROC_AUC: float
    PR_AUC: float
    Brier: float
    tau: float
    TP: int
    FP: int
    TN: int
    FN: int

    def as_dict(self) -> dict[str, float | int | str]:
        return asdict(self)


def load_market_data(ticker: str, start: str, end: str) -> pd.DataFrame:
    """Load daily OHLCV data from Stooq, falling back to Yahoo Finance."""
    try:
        from pandas_datareader import data as pdr

        df = pdr.DataReader(ticker, "stooq", start=start, end=end)
        df = df.sort_index()
        if "Adj Close" not in df.columns:
            df["Adj Close"] = df["Close"]
    except Exception:
        import yfinance as yf

        df = yf.download(ticker, start=start, end=end, auto_adjust=False, progress=False)
        if isinstance(df.columns, pd.MultiIndex):
            df.columns = df.columns.get_level_values(0)

    expected = ["Open", "High", "Low", "Close", "Adj Close", "Volume"]
    missing = [column for column in expected if column not in df.columns]
    if missing:
        raise ValueError(f"Missing required market columns: {missing}")

    return df.loc[:, expected].dropna().sort_index()


def _rsi(close: pd.Series, window: int = 14) -> pd.Series:
    diff = close.diff()
    gain = diff.clip(lower=0)
    loss = -diff.clip(upper=0)
    avg_gain = gain.rolling(window).mean()
    avg_loss = loss.rolling(window).mean()
    rs = avg_gain / avg_loss.replace(0, np.nan)
    return 100 - (100 / (1 + rs))


def build_feature_frame(price_df: pd.DataFrame) -> pd.DataFrame:
    df = price_df.copy().sort_index()

    df["ret_1"] = df["Adj Close"].pct_change()
    df["logret_1"] = np.log(df["Adj Close"]).diff()

    for window in (5, 10, 20):
        df[f"ma_{window}"] = df["Adj Close"].rolling(window).mean()
        df[f"mom_{window}"] = df["Adj Close"].pct_change(window)

    for window in (10, 20):
        df[f"vol_{window}"] = df["ret_1"].rolling(window).std()

    df["rsi14"] = _rsi(df["Adj Close"], 14)
    volume_mean = df["Volume"].rolling(20).mean()
    volume_std = df["Volume"].rolling(20).std()
    df["vol_z"] = (df["Volume"] - volume_mean) / volume_std.replace(0, np.nan)

    df["ret_next"] = df["Adj Close"].pct_change().shift(-1)
    df["y"] = (df["ret_next"] > 0).astype(int)

    return df.loc[:, FEATURE_COLUMNS + ["ret_next", "y"]].dropna()


def chronological_split(
    frame: pd.DataFrame,
    train_ratio: float = 0.70,
    val_ratio: float = 0.15,
) -> tuple[pd.DataFrame, pd.DataFrame, pd.DataFrame]:
    if train_ratio <= 0 or val_ratio <= 0 or train_ratio + val_ratio >= 1:
        raise ValueError("train_ratio and val_ratio must leave a positive test split")

    n_rows = len(frame)
    train_end = int(n_rows * train_ratio)
    val_end = int(n_rows * (train_ratio + val_ratio))
    if train_end == 0 or val_end <= train_end or val_end >= n_rows:
        raise ValueError("Not enough rows for chronological train/validation/test splits")

    return frame.iloc[:train_end], frame.iloc[train_end:val_end], frame.iloc[val_end:]


def make_model_specs(seed: int = 42) -> dict[str, list[tuple[str, Any]]]:
    from sklearn.calibration import CalibratedClassifierCV
    from sklearn.linear_model import LogisticRegression
    from sklearn.neural_network import MLPClassifier
    from sklearn.pipeline import Pipeline
    from sklearn.preprocessing import StandardScaler
    from sklearn.svm import LinearSVC

    logistic = [
        (
            f"C={c}",
            Pipeline(
                [
                    ("scale", StandardScaler()),
                    (
                        "model",
                        LogisticRegression(
                            C=c,
                            class_weight="balanced",
                            max_iter=2_000,
                            random_state=seed,
                        ),
                    ),
                ]
            ),
        )
        for c in [0.1, 0.5, 1, 2, 5, 10]
    ]

    svm = [
        (
            f"C={c}",
            Pipeline(
                [
                    ("scale", StandardScaler()),
                    (
                        "model",
                        CalibratedClassifierCV(
                            LinearSVC(C=c, class_weight="balanced", random_state=seed),
                            method="sigmoid",
                            cv=3,
                        ),
                    ),
                ]
            ),
        )
        for c in [0.1, 0.5, 1, 2, 5]
    ]

    mlp = []
    for hidden in [(64, 32), (128, 64)]:
        for alpha in [1e-5, 1e-4, 1e-3]:
            for lr in [1e-3, 5e-4]:
                mlp.append(
                    (
                        f"hidden={hidden}, alpha={alpha}, lr={lr}",
                        Pipeline(
                            [
                                ("scale", StandardScaler()),
                                (
                                    "model",
                                    MLPClassifier(
                                        hidden_layer_sizes=hidden,
                                        alpha=alpha,
                                        learning_rate_init=lr,
                                        early_stopping=True,
                                        max_iter=600,
                                        random_state=seed,
                                    ),
                                ),
                            ]
                        ),
                    )
                )

    return {
        "Logistic": logistic,
        "SVM_platt": svm,
        "MLP": mlp,
    }


def _confusion_counts(y_true: np.ndarray, pred: np.ndarray) -> tuple[int, int, int, int]:
    y_true = np.asarray(y_true)
    pred = np.asarray(pred)
    tp = int(((y_true == 1) & (pred == 1)).sum())
    fp = int(((y_true == 0) & (pred == 1)).sum())
    tn = int(((y_true == 0) & (pred == 0)).sum())
    fn = int(((y_true == 1) & (pred == 0)).sum())
    return tn, fp, fn, tp


def _binary_f1(y_true: np.ndarray, pred: np.ndarray) -> float:
    _, fp, fn, tp = _confusion_counts(y_true, pred)
    denominator = (2 * tp) + fp + fn
    if denominator == 0:
        return 0.0
    return float((2 * tp) / denominator)


def _average_precision(y_true: np.ndarray, probabilities: np.ndarray) -> float:
    y_true = np.asarray(y_true)
    probabilities = np.asarray(probabilities)
    positives = int((y_true == 1).sum())
    if positives == 0:
        return 0.0

    order = np.argsort(-probabilities, kind="mergesort")
    y_sorted = y_true[order]
    true_positive_count = 0
    precision_sum = 0.0
    for rank, label in enumerate(y_sorted, start=1):
        if label == 1:
            true_positive_count += 1
            precision_sum += true_positive_count / rank
    return float(precision_sum / positives)


def _roc_auc(y_true: np.ndarray, probabilities: np.ndarray) -> float:
    y_true = np.asarray(y_true)
    probabilities = np.asarray(probabilities)
    positives = int((y_true == 1).sum())
    negatives = int((y_true == 0).sum())
    if positives == 0 or negatives == 0:
        return float("nan")

    ranks = pd.Series(probabilities).rank(method="average").to_numpy()
    positive_rank_sum = ranks[y_true == 1].sum()
    auc = (positive_rank_sum - positives * (positives + 1) / 2) / (positives * negatives)
    return float(auc)


def _safe_auc(metric, y_true: np.ndarray, probabilities: np.ndarray) -> float:
    if len(np.unique(y_true)) < 2:
        return float("nan")
    return float(metric(y_true, probabilities))


def walk_forward_cv(
    train_frame: pd.DataFrame,
    model_specs: dict[str, Iterable[tuple[str, Any]]],
    n_splits: int = 5,
) -> pd.DataFrame:
    from sklearn.model_selection import TimeSeriesSplit

    x = train_frame.loc[:, FEATURE_COLUMNS]
    y = train_frame["y"].to_numpy()
    splitter = TimeSeriesSplit(n_splits=n_splits)
    rows: list[dict[str, float | int | str]] = []

    for model_name, candidates in model_specs.items():
        for param_label, estimator in candidates:
            for fold, (train_idx, valid_idx) in enumerate(splitter.split(x)):
                x_train, x_valid = x.iloc[train_idx], x.iloc[valid_idx]
                y_train, y_valid = y[train_idx], y[valid_idx]
                estimator.fit(x_train, y_train)
                probabilities = estimator.predict_proba(x_valid)[:, 1]
                rows.append(
                    {
                        "model": model_name,
                        "param": param_label,
                        "fold": fold,
                        "PR_AUC": _average_precision(y_valid, probabilities),
                        "ROC_AUC": _safe_auc(_roc_auc, y_valid, probabilities),
                    }
                )

    return pd.DataFrame(rows)


def select_threshold_by_f1(
    y_true: np.ndarray,
    probabilities: np.ndarray,
    thresholds: Iterable[float] | None = None,
) -> float:
    grid = np.linspace(0, 1, 1001) if thresholds is None else list(thresholds)
    best_threshold = 0.5
    best_f1 = -1.0

    for threshold in grid:
        pred = (probabilities >= threshold).astype(int)
        score = _binary_f1(y_true, pred)
        if score > best_f1:
            best_f1 = score
            best_threshold = float(threshold)

    return best_threshold


def evaluate_probabilities(
    model_name: str,
    y_true: np.ndarray,
    probabilities: np.ndarray,
    threshold: float,
) -> EvaluationResult:
    pred = (probabilities >= threshold).astype(int)
    tn, fp, fn, tp = _confusion_counts(y_true, pred)

    return EvaluationResult(
        model=model_name,
        ACC=float(np.mean(y_true == pred)),
        F1=_binary_f1(y_true, pred),
        ROC_AUC=_safe_auc(_roc_auc, y_true, probabilities),
        PR_AUC=_average_precision(y_true, probabilities),
        Brier=float(np.mean((np.asarray(y_true) - np.asarray(probabilities)) ** 2)),
        tau=float(threshold),
        TP=int(tp),
        FP=int(fp),
        TN=int(tn),
        FN=int(fn),
    )
