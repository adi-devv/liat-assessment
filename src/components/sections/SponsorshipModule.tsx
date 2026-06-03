import { motion } from 'framer-motion'
import { AUDIENCE_DATA, SPONSOR_TIERS } from '../../data'
import { useModal } from '../../ModalContext'
import SectionShell, { itemVariants } from '../ui/SectionShell'

export default function SponsorshipModule() {
  const { open } = useModal()

  return (
    <SectionShell id="sponsorship" className="bg-dark">
      {() => (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.08),transparent_50%)]" />

          <div className="mb-8">
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.3em] text-gold"
            >
              Sponsorship
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="section-title mt-4 max-w-4xl font-serif text-white"
            >
              Become Part of the Experience
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            {/* Tiers */}
            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-8"
            >
              {SPONSOR_TIERS.map((t) => (
                <motion.div
                  key={t.tier}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="flex flex-col rounded-xl border border-dark-3 bg-dark-2/50 p-6 transition-shadow duration-300 hover:shadow-[0_0_30px_-10px_rgba(201,168,76,0.35)] will-change-transform"
                  style={{ borderTop: `2px solid ${t.accent}` }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.25em]"
                    style={{ color: t.accent }}
                  >
                    {t.tier}
                  </span>
                  <h3 className="mt-2 font-serif text-xl text-white">{t.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-dim">
                    {t.perks.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span style={{ color: t.accent }}>—</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-5 text-xs uppercase tracking-[0.15em] text-white/80">
                    {t.availability}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Audience data */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="rounded-xl border border-dark-3 bg-dark-2/50 p-6">
                <div className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">
                  The Audience
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                  {AUDIENCE_DATA.map((a) => (
                    <div key={a.label}>
                      <div className="font-serif text-3xl text-gradient-gold">
                        {a.value}
                      </div>
                      <div className="mt-1 text-xs leading-snug text-dim">{a.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => open('Sponsorship')}
                className="mt-6 w-full rounded-md bg-gradient-gold py-3.5 text-xs uppercase tracking-[0.2em] text-dark transition-transform duration-200 hover:scale-[1.01]"
              >
                Discuss a Partnership →
              </button>
            </motion.div>
          </div>
        </>
      )}
    </SectionShell>
  )
}
