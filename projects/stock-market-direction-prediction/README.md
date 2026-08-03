# AAPL Stock Direction Prediction

Time-series machine-learning project for predicting whether Apple (AAPL) closes up on the next trading day. The project was rebuilt from a university machine-learning assignment into a portfolio-ready repository with reproducible code, saved evaluation outputs, and an honest discussion of model limitations.

This is not a trading bot or financial advice. The useful part of the project is the workflow: market data ingestion, lag-safe feature engineering, chronological validation, model comparison, calibration checks, and reporting.

## Live Links

- Live portfolio dashboard: https://jinhyeok-portfolio-amber.vercel.app/#stock-analysis-app
- Portfolio homepage: https://jinhyeok-portfolio-amber.vercel.app
- Source folder on GitHub: https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/stock-market-direction-prediction

## What I Built

- Downloaded daily AAPL OHLCV market data for 2021-07-15 to 2025-07-15.
- Engineered return, log-return, moving-average, momentum, volatility, RSI, and volume z-score features.
- Predicted next-day direction using a binary target: `1` if next adjusted close return is positive, otherwise `0`.
- Compared Logistic Regression, calibrated Linear SVM, and MLP models.
- Used chronological train/validation/test splits plus 5-fold walk-forward cross-validation.
- Exported ROC/PR curves, calibration plots, threshold sweeps, timeline diagnostics, and result tables.

## Dataset

The project uses public daily AAPL market data:

- Primary source: Stooq through `pandas-datareader`.
- Fallback source: Yahoo Finance through `yfinance`.
- Date window: 2021-07-15 to 2025-07-15.
- Columns used: `Open`, `High`, `Low`, `Close`, `Adj Close`, `Volume`.

Raw downloaded price data is not committed. The pipeline fetches it at runtime, and the repository includes result tables generated from the original assignment run.

## Skills Demonstrated

- Python data analysis with pandas and NumPy.
- Feature engineering for time-series classification.
- Walk-forward validation without random shuffling.
- scikit-learn model pipelines and hyperparameter comparison.
- Probability calibration and threshold analysis.
- Clear reporting of weak predictive results instead of overstating performance.

## Results From Saved Run

| Model | Test ACC | Test F1 | ROC AUC | PR AUC | Brier | Selected threshold |
|---|---:|---:|---:|---:|---:|---:|
| Logistic Regression | 0.534 | 0.696 | 0.527 | 0.564 | 0.248 | 0.397 |
| SVM + Platt calibration | 0.534 | 0.696 | 0.507 | 0.533 | 0.252 | 0.000 |
| MLP | 0.534 | 0.696 | 0.478 | 0.522 | 0.265 | 0.366 |

Best walk-forward CV configuration by average PR AUC:

- Logistic Regression, `C=0.1`
- Average PR AUC: 0.552
- Average ROC AUC: 0.557

The final test confusion matrices show that the selected thresholds classified every test sample as upward movement. That is an important limitation, not a success claim. I kept it visible because it shows why financial-direction prediction needs careful baselines, class balance checks, calibration, and out-of-sample validation before any practical use.

## Repository Structure

```text
.
├── figures/                  # Selected diagnostic plots from the saved run
├── results/                  # CSV/JSON result tables from the assignment run
├── scripts/run_analysis.py   # Re-run the pipeline and export outputs
├── src/stock_direction/      # Reusable data, feature, model, and evaluation code
└── tests/                    # Offline tests using synthetic price data
```

## Run Locally

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
python scripts/run_analysis.py --ticker AAPL --start 2021-07-15 --end 2025-07-16
```

The script writes new outputs into `outputs/`. Network access is required only for downloading price data.

## Portfolio Notes

The project is intentionally framed as a data-science evaluation project. The model did not produce strong market-predictive performance, but it demonstrates a practical ML workflow and the judgment to document negative or modest results honestly.
