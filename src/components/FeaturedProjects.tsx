import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink, GitBranch, Star } from 'lucide-react'
import { projects } from '../data/portfolio'
import { MotionSection } from './MotionSection'
import { SectionHeading } from './SectionHeading'

function isTodoUrl(url: string) {
  return url.trim().toUpperCase() === 'TODO'
}

export function FeaturedProjects() {
  const [openProject, setOpenProject] = useState(projects[0]?.title ?? '')

  return (
    <MotionSection id="projects" className="border-y border-white/5 bg-white/[0.02]">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Compact case-study cards"
        description="Core project information stays scannable, with problem, contribution, and results available through expandable details."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`flex min-h-[620px] flex-col overflow-hidden rounded-lg border bg-slate-900/70 shadow-xl shadow-black/20 transition hover:-translate-y-1 ${
              project.featured
                ? 'border-cyan-300/45 shadow-cyan-950/20'
                : 'border-white/10 hover:border-cyan-300/30'
            }`}
          >
            <div className="relative aspect-[16/10] bg-slate-950">
              <img
                src={project.image}
                alt={`${project.title} visual placeholder`}
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

              <p className="mt-4 min-h-24 text-sm leading-7 text-slate-300">
                {project.overview}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-xs text-violet-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={isTodoUrl(project.githubUrl) ? undefined : project.githubUrl}
                  aria-disabled={isTodoUrl(project.githubUrl)}
                  aria-label={
                    isTodoUrl(project.githubUrl)
                      ? `${project.title} repository coming soon`
                      : `Open ${project.title} GitHub repository`
                  }
                  target={isTodoUrl(project.githubUrl) ? undefined : '_blank'}
                  rel={isTodoUrl(project.githubUrl) ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-3 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-55"
                >
                  Repository coming soon
                  <GitBranch size={18} aria-hidden="true" />
                </a>
                <a
                  href={isTodoUrl(project.liveDemoUrl) ? undefined : project.liveDemoUrl}
                  aria-disabled={isTodoUrl(project.liveDemoUrl)}
                  aria-label={
                    isTodoUrl(project.liveDemoUrl)
                      ? `${project.title} live demo coming soon`
                      : `Open ${project.title} live demo`
                  }
                  target={isTodoUrl(project.liveDemoUrl) ? undefined : '_blank'}
                  rel={isTodoUrl(project.liveDemoUrl) ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400/12 px-3 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-200 aria-disabled:cursor-not-allowed aria-disabled:opacity-55"
                >
                  Demo coming soon
                  <ExternalLink size={18} aria-hidden="true" />
                </a>
              </div>

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
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-300">
                      {project.myContribution.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">
                      Results
                    </p>
                    <ul className="mt-2 space-y-2 text-sm leading-7 text-slate-300">
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
