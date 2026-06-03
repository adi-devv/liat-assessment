import { motion } from 'framer-motion'
import { LOCATION_CALLOUTS, SCALE_STATS } from '../../data'
import SectionShell, { itemVariants } from '../ui/SectionShell'
import StatCounter from '../ui/StatCounter'

export default function ScaleSection() {
  return (
    <SectionShell id="scale" className="bg-dark">
      {(inView) => (
        <>
          {/* faint grid backdrop */}
          <div className="grid-bg pointer-events-none absolute inset-0 -z-10 opacity-60" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(201,168,76,0.08),transparent_55%)]" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left: headline */}
            <div>
              <motion.span
                variants={itemVariants}
                className="text-xs uppercase tracking-[0.3em] text-gold"
              >
                Why American Dream
              </motion.span>
              <motion.h2
                variants={itemVariants}
                className="section-title mt-5 font-serif text-white"
              >
                Where Scale
                <br />
                Meets <span className="text-gradient-gold">Ambition</span>
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="mt-7 max-w-md text-base leading-relaxed text-dim"
              >
                No property in North America combines retail, entertainment, luxury, and
                live events at this scale — 3 miles from the most valuable market on earth.
              </motion.p>

              {/* location callouts */}
              <motion.div
                variants={itemVariants}
                className="mt-9 flex flex-col gap-3"
              >
                {LOCATION_CALLOUTS.map((c) => (
                  <div
                    key={c}
                    className="flex items-center gap-3 text-sm text-white/90"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {c}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: stat grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-x-8 gap-y-10"
            >
              {SCALE_STATS.map((s) => (
                <StatCounter
                  key={s.label}
                  value={s.value}
                  active={inView}
                  label={s.label}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  decimals={s.decimals}
                />
              ))}
            </motion.div>
          </div>
        </>
      )}
    </SectionShell>
  )
}
