import { footerLinks, profile } from '../data/portfolio'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 text-sm text-slate-400 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-2">
            © 2026 {profile.name}. Built with React, TypeScript, Vite, Tailwind
            CSS, Framer Motion, and Lucide React.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.ariaLabel}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                <Icon size={16} aria-hidden="true" />
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
