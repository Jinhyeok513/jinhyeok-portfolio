const metrics = [
  ['Logistic Regression', '0.534', '0.696', '0.527', '0.564', '0.248'],
  ['SVM + Platt', '0.534', '0.696', '0.507', '0.533', '0.252'],
  ['MLP', '0.534', '0.696', '0.478', '0.522', '0.265'],
]

const diagnostics = [
  ['ROC / PR', '/images/projects/stock-direction-roc-pr.png'],
  ['Walk-Forward CV', '/images/projects/stock-cv-wf-boxplot.png'],
  ['Calibration', '/images/projects/stock-logistic-calibration.png'],
  ['Timeline', '/images/projects/stock-logistic-timeline.png'],
]

export function StockAnalysisDashboard() {
  return (
    <section
      id="stock-analysis-app"
      className="scroll-mt-24 border-b border-white/5 bg-slate-950/80 py-16"
      aria-labelledby="stock-analysis-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Stock Analysis App
            </p>
            <h2 id="stock-analysis-title" className="mt-3 text-3xl font-semibold text-white">
              AAPL Stock Direction Prediction Dashboard
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Embedded dashboard for reviewing the rebuilt Stock ML project:
              public AAPL OHLCV data, lag-safe technical features, chronological
              validation, saved model metrics, and diagnostic plots.
            </p>
          </div>
          <a
            href="https://github.com/Jinhyeok513/jinhyeok-portfolio/tree/main/projects/stock-market-direction-prediction"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
          >
            View GitHub Code
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Dataset
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              AAPL OHLCV from 2021-07-15 to 2025-07-15, loaded from Stooq with
              Yahoo Finance fallback.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Features
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Returns, log returns, moving averages, momentum, volatility, RSI14,
              and volume z-score.
            </p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
              Validation
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-200">
              Chronological train/validation/test split with 5-fold walk-forward
              cross-validation.
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-lg border border-white/10 bg-slate-900/70">
          <div className="border-b border-white/10 px-4 py-3">
            <p className="text-sm font-semibold text-white">Saved Test Results</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-left text-sm">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.12em] text-slate-400">
                <tr>
                  {['Model', 'ACC', 'F1', 'ROC AUC', 'PR AUC', 'Brier'].map((heading) => (
                    <th key={heading} className="px-4 py-3 font-semibold">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {metrics.map(([model, acc, f1, roc, pr, brier]) => (
                  <tr key={model} className="text-slate-200">
                    <td className="px-4 py-4 font-semibold text-white">{model}</td>
                    <td className="px-4 py-4">{acc}</td>
                    <td className="px-4 py-4">{f1}</td>
                    <td className="px-4 py-4">{roc}</td>
                    <td className="px-4 py-4">{pr}</td>
                    <td className="px-4 py-4">{brier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {diagnostics.map(([title, src]) => (
            <figure key={title} className="overflow-hidden rounded-lg border border-white/10 bg-slate-900/70">
              <figcaption className="border-b border-white/10 px-4 py-3 text-sm font-semibold text-white">
                {title}
              </figcaption>
              <img
                src={src}
                alt={`${title} diagnostic plot for AAPL Stock Direction Prediction`}
                className="aspect-[16/10] w-full bg-white object-contain p-2"
              />
            </figure>
          ))}
        </div>

        <p className="mt-5 rounded-lg border border-amber-300/20 bg-amber-300/[0.06] p-4 text-sm leading-7 text-amber-100">
          Limitation: saved thresholded predictions classify every test sample as
          upward movement. This is presented as a transparent ML evaluation
          workflow, not a production trading signal.
        </p>
      </div>
    </section>
  )
}
