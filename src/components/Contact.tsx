import { Download, Send } from 'lucide-react'
import { contactLinks, profile } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function Contact() {
  return (
    <MotionSection id="contact" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="Contact"
        title="Contact and profile links"
        description="Verified GitHub, LinkedIn, and email links are connected directly. The resume area remains disabled until a real PDF is added."
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
              Reach out for AI engineering, machine learning, computer vision,
              or portfolio project discussions.
            </p>

            {contactLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.ariaLabel}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                >
                  <span>{link.label}</span>
                  <Icon size={18} aria-hidden="true" />
                </a>
              )
            })}

            {profile.resumeUrl ? (
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center justify-between gap-3 rounded-md border border-cyan-300/20 bg-cyan-300/10 px-4 py-4 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/20 focus:outline-none focus:ring-2 focus:ring-cyan-200"
              >
                <span>Download Resume</span>
                <Download size={18} aria-hidden="true" />
              </a>
            ) : (
              <span
                aria-disabled="true"
                className="inline-flex cursor-not-allowed items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.03] px-4 py-4 text-sm font-semibold text-slate-500"
              >
                <span>Resume not published</span>
                <Download size={18} aria-hidden="true" />
              </span>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Evidence-first portfolio
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">
            Public details stay tied to source material.
          </h3>
          <p className="mt-4 leading-8 text-slate-300">
            Project descriptions, metrics, demos, and repository links are
            included only where they were found in the current workspace or
            verified public sources. Private datasets, unpublished resume files,
            and missing project links are not exposed.
          </p>
        </div>
      </div>
    </MotionSection>
  )
}
