import { skillGroups } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function TechnicalSkills() {
  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Verified stack separated from placeholders"
        description="No fake proficiency percentages. Verified portfolio stack is highlighted, while unknown AI/Data tools stay visibly marked as TODO."
      />

      <div className="mb-6 flex flex-wrap gap-3 text-sm">
        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-cyan-100">
          Verified
        </span>
        <span className="rounded-full border border-amber-200/25 bg-amber-200/10 px-3 py-1 text-amber-100">
          TODO placeholder
        </span>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {skillGroups.map((group) => {
          const Icon = group.icon
          return (
            <article
              key={group.title}
              className="flex min-h-[310px] flex-col rounded-lg border border-white/10 bg-slate-900/[0.65] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-slate-900/[0.85]"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-cyan-400/20 to-violet-500/20 text-cyan-100">
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-5 space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className={`rounded-md border px-3 py-2 text-sm leading-6 ${
                      skill.verified
                        ? 'border-cyan-300/20 bg-cyan-300/[0.08] text-slate-100'
                        : 'border-amber-200/15 bg-amber-200/[0.08] text-amber-100'
                    }`}
                  >
                    {skill.name}
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>
    </MotionSection>
  )
}
