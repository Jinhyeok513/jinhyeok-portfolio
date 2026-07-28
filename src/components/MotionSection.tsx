import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'

type MotionSectionProps = PropsWithChildren<{
  id: string
  className?: string
}>

export function MotionSection({ id, className = '', children }: MotionSectionProps) {
  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 px-5 py-16 sm:px-6 md:py-20 lg:px-8 ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </motion.section>
  )
}
