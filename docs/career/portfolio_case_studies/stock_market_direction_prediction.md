# AAPL Stock Direction Prediction

## Purpose

Portfolio case study for a rebuilt university machine-learning assignment on AAPL next-day stock direction prediction. The project should be described as a time-series ML workflow and limitation-analysis project, not as a trading system.

## Dataset

- Public daily AAPL OHLCV market data.
- Date window: 2021-07-15 to 2025-07-15.
- Primary data source: Stooq via `pandas-datareader`.
- Fallback data source: Yahoo Finance via `yfinance`.
- Raw columns: `Open`, `High`, `Low`, `Close`, `Adj Close`, `Volume`.

## Implemented Skills

- Python, pandas, NumPy and scikit-learn.
- Time-series feature engineering.
- Logistic Regression, calibrated Linear SVM and MLPClassifier.
- Walk-forward validation and chronological holdout testing.
- ROC/PR, Brier score, calibration, threshold sweep and confusion-matrix analysis.
- Honest reporting of weak predictive performance.

## Verified Results

- Best walk-forward CV result: Logistic Regression `C=0.1`, average PR AUC 0.552 and average ROC AUC 0.557.
- Final test Logistic Regression result: accuracy 0.534, F1 0.696, ROC AUC 0.527, PR AUC 0.564 and Brier score 0.248.
- The saved final predictions classified all test samples as positive at the selected thresholds, producing TP 79, FP 69, TN 0 and FN 0 for Logistic Regression.

## Positioning Guidance

Use this project for AI engineering, data science, business analytics and evidence-based project discussions. Avoid presenting it as a profitable trading strategy or production financial model. The strongest career signal is that Jinhyeok can turn weak or noisy data results into a transparent evaluation story.
