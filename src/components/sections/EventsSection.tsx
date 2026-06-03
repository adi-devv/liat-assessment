import { motion } from 'framer-motion'
import { EVENT_TYPES } from '../../data'
import { useModal } from '../../ModalContext'
import SectionShell, { itemVariants } from '../ui/SectionShell'

export default function EventsSection() {
  const { open } = useModal()

  return (
    <SectionShell id="events" className="bg-dark">
      {() => (
        <>
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(201,168,76,0.08),transparent_50%)]" />

          <motion.span
            variants={itemVariants}
            className="text-xs uppercase tracking-[0.3em] text-gold"
          >
            Events & Platform
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="section-title mt-4 max-w-4xl font-serif text-white"
          >
            The Most Powerful Brand Platform in America
          </motion.h2>

          <div className="mt-9 grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left editorial */}
            <motion.div variants={itemVariants} className="lg:col-span-5">
              <div className="space-y-5 text-base leading-relaxed text-white/85">
                <p className="font-serif text-xl text-white">
                  American Dream is not just a mall. It is a global stage.
                </p>
                <ul className="space-y-2 text-dim">
                  <li>100,000 sq ft of activatable event space.</li>
                  <li>7 distinct event venues.</li>
                  <li>2 billion social media impressions annually.</li>
                </ul>
                <p className="text-white/85">
                  Brands that activate here don't just reach customers — they become part
                  of the culture.
                </p>
              </div>

              <div className="mt-7 inline-flex items-center gap-3 rounded-md border border-gold/40 bg-gold/5 px-5 py-3">
                <span className="font-serif text-2xl text-gradient-gold">50,000</span>
                <span className="text-xs uppercase tracking-[0.18em] text-dim">
                  Up to daily
                  <br />
                  event attendees
                </span>
              </div>

              <div>
                <button
                  onClick={() => open('Event Booking')}
                  className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold transition-colors hover:text-gold-light"
                >
                  Book Your Event <span aria-hidden>→</span>
                </button>
              </div>
            </motion.div>

            {/* Right event cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-7"
            >
              {EVENT_TYPES.map((e) => (
                <div
                  key={e.title}
                  className="group rounded-lg border border-dark-3 bg-dark-2/50 p-5 transition-colors duration-300 hover:border-gold/40"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{e.icon}</span>
                    <h3 className="font-serif text-lg text-white">{e.title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-dim">{e.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </SectionShell>
  )
}
