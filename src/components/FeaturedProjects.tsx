import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink, GitBranch, Star } from 'lucide-react'
import { projects } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

function ProjectLink({
  href,
  label,
  disabledLabel,
  ariaLabel,
  variant,
}: {
  href: string
  label: string
  disabledLabel: string
  ariaLabel: string
  variant: 'outline' | 'primary'
}) {
  const baseClass =
    'inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-200'
  const variantClass =
    variant === 'primary'
      ? 'bg-cyan-400/12 text-cyan-100 hover:bg-cyan-400/20'
      : 'border border-white/15 text-slate-100 hover:bg-white/10'
  const disabledClass =
    variant === 'primary'
      ? 'cursor-not-allowed bg-slate-800/60 text-slate-500'
      : 'cursor-not-allowed border border-white/10 text-slate-500'

  if (!href) {
    return (
      <span className={`${baseClass} ${disabledClass}`} aria-disabled="true">
        {disabledLabel}
      </span>
    )
  }

  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${variantClass}`}
    >
      {label}
      {variant === 'primary' ? (
        <ExternalLink size={18} aria-hidden="true" />
      ) : (
        <GitBranch size={18} aria-hidden="true" />
      )}
    </a>
  )
}

export function FeaturedProjects() {
  const [openProject, setOpenProject] = useState(projects[0]?.title ?? '')

  return (
    <MotionSection id="projects" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Engineering case studies"
        description="Each project card keeps the main story scannable and opens into verified problem, contribution, result, and limitation details."
      />

      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex min-h-[610px] flex-col overflow-hidden rounded-lg border bg-slate-900/70 shadow-xl shadow-black/20 transition hover:-translate-y-1 ${
              project.featured
                ? 'border-cyan-300/45 shadow-cyan-950/20'
                : 'border-white/10 hover:border-cyan-300/30'
            }`}
          >
            <div className="relative aspect-[16/10] bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} project visual`}
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 to-transparent p-4">
                <p className="text-xs text-slate-300">{project.imageStatus}</p>
              </div>
              {project.featured && (
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-cyan-200/25 bg-cyan-200/15 px-3 py-1 text-xs font-semibold text-cyan-100">
                  <Star size={13} aria-hidden="true" />
                  Featured
                </div>
              )}
            </div>

            <div className="flex flex-1 flex-col p-5">
              <h3 className="min-h-16 text-xl font-semibold leading-8 text-white">
                {project.title}
              </h3>

              <p className="mt-4 min-h-32 text-sm leading-7 text-slate-300">
                {project.overview}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-6">
                <div className="grid grid-cols-2 gap-3">
                  <ProjectLink
                    href={project.githubUrl}
                    label="GitHub"
                    disabledLabel="Repository unavailable"
                    ariaLabel={`Open ${project.title} GitHub repository`}
                    variant="outline"
                  />
                  <ProjectLink
                    href={project.liveDemoUrl}
                    label="Live Demo"
                    disabledLabel="Demo unavailable"
                    ariaLabel={`Open ${project.title} live demo`}
                    variant="primary"
                  />
                </div>

                {project.contextUrl && project.contextLabel && (
                  <a
                    href={project.contextUrl}
                    aria-label={`Open ${project.contextLabel}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-300/20 bg-cyan-300/[0.06] px-3 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/12 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  >
                    {project.contextLabel}
                    <ExternalLink size={17} aria-hidden="true" />
                  </a>
                )}

                <button
                  type="button"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200"
                  aria-expanded={openProject === project.title}
                  onClick={() =>
                    setOpenProject((current) =>
                      current === project.title ? '' : project.title,
                    )
                  }
                >
                  Details
                  {openProject === project.title ? (
                    <ChevronUp size={18} aria-hidden="true" />
                  ) : (
                    <ChevronDown size={18} aria-hidden="true" />
                  )}
                </button>
              </div>

              {openProject === project.title && (
                <div className="mt-4 space-y-4 rounded-lg border border-white/10 bg-slate-950/55 p-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {project.problemDefinition}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      My Contribution
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                      {project.myContribution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      Results
                    </p>
                    <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                      {project.keyResults.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </MotionSection>
  )
}
