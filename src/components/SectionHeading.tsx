type SectionHeadingProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl md:mb-12">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
        {description}
      </p>
    </div>
  )
}
