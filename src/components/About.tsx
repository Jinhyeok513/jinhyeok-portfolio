import { focusAreas, profile, stats } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <MotionSection id="about" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="About"
        title="Practical AI, from raw data to usable systems"
        description="A concise overview of the verified portfolio direction and the way project evidence is handled."
      />

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-black/15 md:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            {profile.title}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            AI graduate building evidence-first machine learning projects.
          </h3>
          <p className="mt-5 leading-8 text-slate-300">
            Jinhyeok Kim's portfolio is centered on practical AI systems:
            preparing data, building models, evaluating outputs, and shaping
            those results into demos or applications that can be reviewed by
            others.
          </p>
          <p className="mt-5 leading-8 text-slate-300">
            The current work highlights NLP for plant-trait extraction,
            computer vision for sports tracking, and pose-based exercise
            analysis. Details that are not backed by local source files or
            public links are deliberately left unpublished.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/10 bg-slate-950/60 p-4"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {focusAreas.map((area) => {
            const Icon = area.icon
            return (
              <div
                key={area.title}
                className="rounded-lg border border-white/10 bg-slate-900/[0.65] p-5 shadow-lg shadow-black/10"
              >
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-violet-500/15 text-cyan-100">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {area.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      {area.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </MotionSection>
  )
}
