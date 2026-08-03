import numpy as np
import pandas as pd

from stock_direction import (
    build_feature_frame,
    chronological_split,
    evaluate_probabilities,
    select_threshold_by_f1,
)


def synthetic_prices(rows: int = 90) -> pd.DataFrame:
    index = pd.date_range("2024-01-01", periods=rows, freq="B")
    base = 100 + np.sin(np.arange(rows) / 4) + np.arange(rows) * 0.05
    return pd.DataFrame(
        {
            "Open": base + 0.1,
            "High": base + 1.0,
            "Low": base - 1.0,
            "Close": base + 0.2,
            "Adj Close": base + 0.2,
            "Volume": 1_000_000 + np.arange(rows) * 1_000,
        },
        index=index,
    )


def test_build_feature_frame_creates_binary_target_without_nans():
    frame = build_feature_frame(synthetic_prices())

    assert not frame.isna().any().any()
    assert set(frame["y"].unique()).issubset({0, 1})
    assert {"rsi14", "vol_z", "ret_next"}.issubset(frame.columns)


def test_chronological_split_preserves_order_and_sizes():
    frame = build_feature_frame(synthetic_prices(120))
    train, validation, test = chronological_split(frame)

    assert train.index.max() < validation.index.min()
    assert validation.index.max() < test.index.min()
    assert len(train) > len(validation) > 0
    assert len(test) > 0


def test_threshold_selection_and_evaluation_are_consistent():
    y_true = np.array([0, 0, 1, 1])
    probabilities = np.array([0.1, 0.4, 0.6, 0.9])
    threshold = select_threshold_by_f1(y_true, probabilities)
    result = evaluate_probabilities("demo", y_true, probabilities, threshold)

    assert 0 <= threshold <= 1
    assert result.model == "demo"
    assert result.TP + result.FP + result.TN + result.FN == 4
    assert result.F1 == 1.0
