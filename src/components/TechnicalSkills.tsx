import { skillGroups } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

export function TechnicalSkills() {
  return (
    <MotionSection id="skills">
      <SectionHeading
        eyebrow="Technical Skills"
        title="Verified technical stack"
        description="Skills are grouped by the technologies found in the portfolio site and inspected project source material. No proficiency percentages are used."
      />

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
                    key={skill}
                    className="rounded-md border border-cyan-300/20 bg-cyan-300/[0.08] px-3 py-2 text-sm leading-6 text-slate-100"
                  >
                    {skill}
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
