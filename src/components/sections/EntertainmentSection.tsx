import { motion } from 'framer-motion'
import { ATTRACTIONS } from '../../data'
import SectionShell, { itemVariants } from '../ui/SectionShell'
import AttractionCard from '../ui/AttractionCard'

export default function EntertainmentSection() {
  return (
    <SectionShell id="entertainment" className="bg-dark-2">
      {() => (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-10%,rgba(155,110,224,0.12),transparent_55%)]" />

          <div className="mb-8">
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-gold"
            >
              Entertainment — The Differentiator
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="section-title mt-4 max-w-4xl font-serif text-white"
            >
              Beyond Retail.
              <br />
              Beyond <span className="text-gradient-gold">Comparison.</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-xl text-base text-dim"
            >
              The world's most ambitious entertainment destination.
            </motion.p>
          </div>

          <motion.div
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {ATTRACTIONS.map((a, i) => (
              <AttractionCard key={a.name} attraction={a} index={i} />
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-8 border-t border-dark-3 pt-5 text-center text-xs uppercase tracking-[0.18em] text-dim sm:text-sm"
          >
            <span className="text-gradient-gold font-serif text-base sm:text-lg">
              16M+
            </span>{' '}
            entertainment visits annually — the most of any mall in the Western Hemisphere
          </motion.div>
        </>
      )}
    </SectionShell>
  )
}
