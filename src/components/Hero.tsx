import { motion } from 'framer-motion'
import { ArrowDown, Download, Mouse, Sparkles } from 'lucide-react'
import {
  codeCardLines,
  contactLinks,
  profile,
  toolBadges,
  workflowSteps,
} from '../data/portfolio'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative max-w-full min-h-[90vh] overflow-hidden px-5 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(90vh-7rem)] w-full max-w-7xl min-w-0 overflow-hidden items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="min-w-0 max-w-[calc(100vw-2.5rem)]"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.08] px-4 py-2 text-sm font-medium text-cyan-100">
            <Sparkles size={16} aria-hidden="true" />
            AI/ML engineering portfolio
          </div>
          <h1 className="mt-7 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold leading-snug text-cyan-200 sm:text-3xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-2xl break-words text-lg leading-8 text-slate-200 md:text-2xl md:leading-9">
            {profile.heroLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#projects"
              className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:w-auto"
            >
              View Projects
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                className="inline-flex w-full max-w-full items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 sm:w-auto"
              >
                Download Resume
                <Download size={18} aria-hidden="true" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex w-full max-w-full cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-slate-400 sm:w-auto"
              >
                Resume not published
                <Download size={18} aria-hidden="true" />
              </span>
            )}
          </div>
          <div className="mt-6 flex flex-wrap gap-3" aria-label="Profile links">
            {contactLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-slate-900/70 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-300/45 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  title={link.label}
                >
                  <Icon size={19} aria-hidden="true" />
                  <span className="sr-only">{link.label}</span>
                </a>
              )
            })}
          </div>
          <div className="mt-8 flex max-w-[calc(100vw-2.5rem)] flex-wrap gap-2 overflow-hidden">
            {toolBadges.map((badge) => (
              <span
                key={badge.label}
                className="max-w-full break-words rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100"
              >
                {badge.label}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative min-w-0 max-w-[calc(100vw-2.5rem)] justify-self-stretch overflow-hidden"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.65, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[calc(100vw-2.5rem)] overflow-hidden rounded-lg border border-white/10 bg-slate-900/75 p-4 shadow-2xl shadow-black/30 backdrop-blur sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-auto hidden text-xs text-slate-500 sm:inline">
                ai_pipeline.ts
              </span>
            </div>
            <div className="min-w-0 space-y-3 font-mono text-xs leading-6 sm:text-sm sm:leading-7">
              {codeCardLines.map((line) => (
                <p
                  key={line.prompt}
                  className="break-words whitespace-normal text-slate-300 [overflow-wrap:anywhere]"
                >
                  <span className="text-cyan-300">{line.prompt}</span>{' '}
                  <span className="text-violet-100">{line.value}</span>
                </p>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workflowSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
                >
                  <p className="text-xs text-slate-500">0{index + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {step.label}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-slate-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-300 transition hover:bg-white/10 md:inline-flex"
      >
        <Mouse size={15} aria-hidden="true" />
        Scroll
        <ArrowDown size={14} aria-hidden="true" />
      </a>
    </section>
  )
}
