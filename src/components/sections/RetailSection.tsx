import { useState } from 'react'
import { motion } from 'framer-motion'
import { BRAND_CLOUD, FLOORS } from '../../data'
import SectionShell, { itemVariants } from '../ui/SectionShell'

interface RetailSectionProps {
  onLeasing: () => void
}

export default function RetailSection({ onLeasing }: RetailSectionProps) {
  const [activeFloor, setActiveFloor] = useState(0)
  const floor = FLOORS[activeFloor]

  return (
    <SectionShell id="retail" className="bg-dark-2">
      {() => (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_85%,rgba(201,168,76,0.07),transparent_50%)]" />

          <motion.span
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-gold"
          >
            Retail
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title mt-4 max-w-4xl font-serif text-white"
          >
            A Retail Environment Unlike Any Other
          </motion.h2>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Left editorial */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <p className="text-base leading-relaxed text-dim">
                450+ brands across 5 floors. From global fast-fashion to luxury flagship
                stores — every category, every tier, every opportunity.
              </p>
              <button
                onClick={onLeasing}
                className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold transition-colors hover:text-gold-light"
              >
                Explore Leasing Opportunities
                <span aria-hidden>→</span>
              </button>
            </motion.div>

            {/* Center floor selector */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="mb-4 flex flex-wrap gap-2">
                {FLOORS.map((f, i) => (
                  <button
                    key={f.floor}
                    onClick={() => setActiveFloor(i)}
                    className={`rounded-md border px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                      i === activeFloor
                        ? 'border-gold bg-gold/10 text-gold'
                        : 'border-dark-3 text-dim hover:border-gold/50 hover:text-white'
                    }`}
                  >
                    Floor {f.floor}
                  </button>
                ))}
              </div>

              <div className="rounded-xl border border-dark-3 bg-dark/60 p-6">
                <div className="mb-1 font-serif text-xl text-white">{floor.name}</div>
                <div className="mb-5 text-xs uppercase tracking-[0.2em] text-dim">
                  Category mix
                </div>

                {/* stacked bar */}
                <div className="flex h-4 w-full overflow-hidden rounded-full">
                  {floor.mix.map((m) => (
                    <motion.div
                      key={m.label}
                      initial={{ width: 0 }}
                      animate={{ width: `${m.pct}%` }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      style={{ background: m.color }}
                      className="h-full"
                    />
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {floor.mix.map((m) => (
                    <div key={m.label} className="flex items-center gap-2 text-sm">
                      <span
                        className="h-2.5 w-2.5 rounded-sm"
                        style={{ background: m.color }}
                      />
                      <span className="text-white/85">{m.label}</span>
                      <span className="ml-auto text-dim">{m.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right brand cloud */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="space-y-3">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 font-serif text-2xl md:text-3xl text-white">
                  {BRAND_CLOUD.large.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 text-lg text-white/80">
                  {BRAND_CLOUD.medium.map((b) => (
                    <span key={b}>{b}</span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-dim">
                  {BRAND_CLOUD.small.map((b) => (
                    <span key={b} className="transition-colors hover:text-gold">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </SectionShell>
  )
}
