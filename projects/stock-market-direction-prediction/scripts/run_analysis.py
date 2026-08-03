from __future__ import annotations

import argparse
import json
from pathlib import Path

import pandas as pd

from stock_direction import (
    FEATURE_COLUMNS,
    build_feature_frame,
    chronological_split,
    evaluate_probabilities,
    load_market_data,
    make_model_specs,
    select_threshold_by_f1,
    walk_forward_cv,
)


def choose_best_params(cv_results: pd.DataFrame) -> pd.DataFrame:
    return (
        cv_results.groupby(["model", "param"], as_index=False)
        .agg(PR_AUC=("PR_AUC", "mean"), ROC_AUC=("ROC_AUC", "mean"))
        .sort_values(["PR_AUC", "ROC_AUC"], ascending=False)
    )


def main() -> None:
    parser = argparse.ArgumentParser(description="Run AAPL stock direction analysis")
    parser.add_argument("--ticker", default="AAPL")
    parser.add_argument("--start", default="2021-07-15")
    parser.add_argument("--end", default="2025-07-16")
    parser.add_argument("--output-dir", default="outputs")
    args = parser.parse_args()

    output_dir = Path(args.output_dir)
    output_dir.mkdir(parents=True, exist_ok=True)

    prices = load_market_data(args.ticker, args.start, args.end)
    frame = build_feature_frame(prices)
    train, validation, test = chronological_split(frame)
    specs = make_model_specs(seed=42)

    cv_results = walk_forward_cv(train, specs)
    cv_results.to_csv(output_dir / "cv_summary.csv", index=False)
    best_params = choose_best_params(cv_results)
    best_params.to_csv(output_dir / "cv_best_params.csv", index=False)

    results = []
    for model_name in ["Logistic", "SVM_platt", "MLP"]:
        param_label = best_params[best_params["model"] == model_name].iloc[0]["param"]
        estimator = dict(specs[model_name])[param_label]

        train_x = pd.concat([train, validation]).loc[:, FEATURE_COLUMNS]
        train_y = pd.concat([train, validation])["y"].to_numpy()
        validation_x = validation.loc[:, FEATURE_COLUMNS]
        validation_y = validation["y"].to_numpy()
        test_x = test.loc[:, FEATURE_COLUMNS]
        test_y = test["y"].to_numpy()

        estimator.fit(train.loc[:, FEATURE_COLUMNS], train["y"].to_numpy())
        validation_prob = estimator.predict_proba(validation_x)[:, 1]
        threshold = select_threshold_by_f1(validation_y, validation_prob)

        estimator.fit(train_x, train_y)
        test_prob = estimator.predict_proba(test_x)[:, 1]
        results.append(
            evaluate_probabilities(model_name, test_y, test_prob, threshold).as_dict()
        )

    (output_dir / "test_results.json").write_text(
        json.dumps(results, indent=2),
        encoding="utf-8",
    )
    pd.DataFrame(results).to_csv(output_dir / "test_results_table.csv", index=False)


if __name__ == "__main__":
    main()
