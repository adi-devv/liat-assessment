import { motion } from 'framer-motion'
import { LEASING_PATHS } from '../../data'
import SectionShell, { itemVariants } from '../ui/SectionShell'
import LeasingCard from '../ui/LeasingCard'

export default function LeasingModule() {
  return (
    <SectionShell id="leasing" className="bg-dark-2">
      {() => (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.08),transparent_50%)]" />

          <div className="mb-10 text-center">
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-gold"
            >
              Leasing
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="section-title mt-4 font-serif text-white"
            >
              Find Your Place in the Dream
            </motion.h2>
          </div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {LEASING_PATHS.map((p, i) => (
              <LeasingCard key={p.title} path={p} index={i} />
            ))}
          </motion.div>
        </>
      )}
    </SectionShell>
  )
}
