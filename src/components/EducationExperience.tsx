import { CalendarDays, GraduationCap } from 'lucide-react'
import { timelineItems } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function EducationExperience() {
  return (
    <MotionSection id="experience">
      <SectionHeading
        eyebrow="Education and Experience"
        title="A clear timeline without invented dates"
        description="UTS Bachelor of Artificial Intelligence is included as requested. Dates, grades, and detailed outcomes remain TODO until verified."
      />

      <div className="mx-auto max-w-5xl">
        <div className="relative space-y-6 before:absolute before:left-5 before:top-4 before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-cyan-300/50 before:via-white/15 before:to-transparent md:before:left-1/2">
          {timelineItems.map((item) => (
            <article
              key={`${item.title}-${item.organization}`}
              className="relative grid gap-4 pl-14 md:grid-cols-[1fr_1fr] md:gap-8 md:pl-0"
            >
              <div className="absolute left-0 top-2 grid h-10 w-10 place-items-center rounded-lg border border-cyan-300/25 bg-cyan-300/12 text-cyan-100 md:left-1/2 md:-translate-x-1/2">
                <GraduationCap size={20} aria-hidden="true" />
              </div>

              <div className="md:text-right">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  {item.title}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {item.organization}
                </h3>
                <div className="mt-4 inline-flex w-fit items-center gap-2 rounded-md border border-white/10 bg-slate-950/60 px-3 py-2 text-sm text-slate-300">
                  <CalendarDays size={16} aria-hidden="true" />
                  {item.period}
                </div>
              </div>

              <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/10">
                <p className="leading-8 text-slate-300">{item.summary}</p>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="leading-7">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  )
}
