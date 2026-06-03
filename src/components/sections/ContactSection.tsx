import { motion } from 'framer-motion'
import { CONTACT_CARDS } from '../../data'
import { useModal } from '../../ModalContext'
import SectionShell, { itemVariants } from '../ui/SectionShell'

export default function ContactSection() {
  const { open } = useModal()

  return (
    <SectionShell id="contact" className="bg-dark">
      {() => (
        <>
          {/* Gold radial bloom */}
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.12),transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.07),transparent_55%)]" />

          <div className="flex flex-col items-center text-center">
            <motion.span
              variants={itemVariants}
              className="text-xs uppercase tracking-[0.4em] text-gold"
            >
              American Dream
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="section-title mt-6 max-w-3xl font-serif text-white"
            >
              Your Story
              <br />
              <span className="text-gradient-gold italic">Starts Here.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-xl text-base leading-relaxed text-dim"
            >
              Join the most ambitious retail, entertainment, and lifestyle destination
              in America. 40 million visitors are waiting.
            </motion.p>

            <motion.div
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 sm:grid-cols-3"
            >
              {CONTACT_CARDS.map((card) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="group flex flex-col items-center rounded-xl border border-dark-3 bg-dark-2/60 p-8 text-center transition-all duration-500 hover:border-gold/50 hover:shadow-[0_0_50px_-10px_rgba(201,168,76,0.35)] will-change-transform"
                >
                  <div className="text-5xl">{card.icon}</div>
                  <h3 className="mt-5 font-serif text-2xl text-white">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-dim">{card.desc}</p>
                  <button
                    onClick={() => open(card.inquiry)}
                    className="mt-8 w-full rounded-md bg-gradient-gold py-3.5 text-xs uppercase tracking-[0.2em] text-dark transition-transform duration-200 hover:scale-[1.02]"
                  >
                    {card.cta}
                  </button>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-16 flex flex-col items-center gap-2"
            >
              <div className="h-px w-24 bg-dark-3" />
              <p className="mt-4 text-[10px] uppercase tracking-[0.35em] text-dim">
                American Dream · East Rutherford, NJ · americandream.com
              </p>
            </motion.div>
          </div>
        </>
      )}
    </SectionShell>
  )
}
