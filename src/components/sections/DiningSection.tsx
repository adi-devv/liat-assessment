import { motion } from 'framer-motion'
import { DINING_CONCEPTS } from '../../data'
import SectionShell, { itemVariants } from '../ui/SectionShell'

export default function DiningSection() {
  return (
    <SectionShell id="dining" className="bg-dark">
      {() => (
        <>
          {/* warm gradient backdrop */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(224,122,60,0.12),transparent_55%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_10%,rgba(201,168,76,0.08),transparent_45%)]" />

          <motion.span
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-gold"
          >
            Dining & Lifestyle
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title mt-4 max-w-3xl font-serif text-white"
          >
            Food Is Not an Afterthought
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DINING_CONCEPTS.map((c) => (
              <motion.div
                key={c.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="group rounded-xl border border-dark-3 bg-dark-2/50 p-6 transition-colors duration-300 hover:border-gold/40 will-change-transform"
              >
                <div className="text-3xl">{c.icon}</div>
                <h3 className="mt-4 font-serif text-xl text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-dim">{c.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-dark-3 pt-6 text-xs uppercase tracking-[0.2em] text-dim"
          >
            <span className="flex items-center gap-2">
              <span className="text-gold">100+</span> Dining Concepts
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">4.2 hr</span> Average Dwell Time
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold">2×</span> Industry-Standard Return Visits
            </span>
          </motion.div>
        </>
      )}
    </SectionShell>
  )
}
