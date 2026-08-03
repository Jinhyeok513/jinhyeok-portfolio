# AAPL Stock Direction Prediction

## Overview

This project predicts whether Apple (AAPL) closes up on the next trading day using daily OHLCV market data, technical time-series features, and supervised classification models. I rebuilt the original university machine-learning assignment into a public-ready project with reusable Python code, saved evaluation tables, diagnostic plots, and a clear limitation analysis.

The project is not a trading bot and does not claim profitable predictive performance. Its value is the data-science workflow: careful feature construction, chronological validation, model comparison, calibration checks, and honest reporting.

## Dataset

- Asset: Apple Inc. (AAPL)
- Date range: 2021-07-15 to 2025-07-15
- Primary source: Stooq through `pandas-datareader`
- Fallback source: Yahoo Finance through `yfinance`
- Fields: `Open`, `High`, `Low`, `Close`, `Adj Close`, `Volume`
- Target: next-day adjusted-close direction, where `1` means the next daily return is positive

Raw market data is downloaded at runtime instead of being committed to the repository.

## Features

- One-day simple return and log return
- Moving averages over 5, 10, and 20 trading days
- Momentum over 5, 10, and 20 trading days
- Rolling volatility over 10 and 20 trading days
- RSI14
- 20-day volume z-score
- Raw OHLCV fields

## Models And Validation

- Logistic Regression with scaling and balanced class weights
- Linear SVM with Platt calibration
- MLPClassifier with early stopping
- Chronological train, validation, and test split
- 5-fold walk-forward cross-validation on the training window
- Threshold selection on the validation window
- Final refit on train plus validation before test evaluation

## Results

Best walk-forward CV configuration:

- Logistic Regression with `C=0.1`
- Average PR AUC: 0.552
- Average ROC AUC: 0.557

Final saved test run:

| Model | ACC | F1 | ROC AUC | PR AUC | Brier |
|---|---:|---:|---:|---:|---:|
| Logistic Regression | 0.534 | 0.696 | 0.527 | 0.564 | 0.248 |
| SVM + Platt calibration | 0.534 | 0.696 | 0.507 | 0.533 | 0.252 |
| MLP | 0.534 | 0.696 | 0.478 | 0.522 | 0.265 |

The selected thresholds classified every test sample as upward movement, producing no true negatives in the saved test run. I keep this visible because it is the main lesson of the project: a stock-direction model can look acceptable on a single F1 score while still being weak, poorly separated, and unsuitable as a decision system.

## My Contribution

- Converted the original assignment notebook into a clearer public project structure.
- Wrote reusable Python functions for feature engineering, chronological splitting, threshold selection, and evaluation.
- Preserved the actual saved result tables and diagnostic plots from the assignment output.
- Reframed the project as a time-series ML evaluation case study rather than a financial prediction claim.

## Repository

The public-ready code is packaged inside the portfolio repository:

`projects/stock-market-direction-prediction`
