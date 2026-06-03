import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useInViewOnce } from '../../hooks'

interface SectionShellProps {
  id: string
  children: (inView: boolean) => ReactNode
  className?: string
  /** content alignment container */
  contentClassName?: string
}

export const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
}

/**
 * Standard full-height snap section with a centered max-width content column
 * and orchestrated entrance animation driven by IntersectionObserver.
 */
export default function SectionShell({
  id,
  children,
  className = '',
  contentClassName = '',
}: SectionShellProps) {
  const [ref, inView] = useInViewOnce<HTMLElement>(0.25)

  return (
    <section ref={ref} id={id} className={`section ${className}`}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className={`relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-12 lg:px-20 ${contentClassName}`}
      >
        {children(inView)}
      </motion.div>
    </section>
  )
}
