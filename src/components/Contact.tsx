import { Download, Send } from 'lucide-react'
import { contactLinks, profile } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <MotionSection id="contact" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="Contact"
        title="Contact and resume hub"
        description="Verified GitHub, LinkedIn, and email links are connected. Resume remains disabled until a real file is added."
      />

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 shadow-2xl shadow-black/25 md:p-8">
          <div className="grid gap-5">
            <div className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-400/15 text-cyan-100">
              <Send size={24} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-semibold text-white">
              {profile.name}
            </h3>
            <p className="leading-8 text-slate-300">
              TODO: Add preferred role titles, location/visa details if relevant,
              and a concise call to action for recruiters or collaborators.
            </p>

            {contactLinks.map((link) => {
              const Icon = link.icon
              const disabled = link.href === 'TODO'

              return (
                <a
                  key={link.label}
                  href={disabled ? undefined : link.href}
                  aria-disabled={disabled}
                  aria-label={link.ariaLabel}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-60"
                >
                  <span>{disabled ? `${link.label} TODO` : link.label}</span>
                  <Icon size={18} aria-hidden="true" />
                </a>
              )
            })}

            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-between gap-3 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm font-semibold text-cyan-100 opacity-60"
            >
              <span>Resume PDF coming soon</span>
              <Download size={18} aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Next step
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Replace remaining project TODOs with verified evidence.
          </h3>
          <p className="mt-4 leading-8 text-slate-300">
            Project repository links, live demos, resume PDF, dates, results, and
            private details are intentionally not guessed. Add them only after
            they are verified and ready to publish.
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
