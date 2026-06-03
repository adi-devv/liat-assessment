import { motion } from 'framer-motion'
import { LUXURY_BRANDS } from '../../data'
import { useInViewOnce } from '../../hooks'
import { useModal } from '../../ModalContext'
import { itemVariants } from '../ui/SectionShell'

export default function LuxurySection() {
  const [ref, inView] = useInViewOnce<HTMLElement>(0.25)
  const { open } = useModal()

  return (
    <section ref={ref} id="luxury" className="section bg-dark">
      {/* Generative luxury panel on the left half — no external assets */}
      <div className="absolute inset-0 -z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="relative hidden overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#0a0805,#15100a_55%,#0a0805)]" />
          <div className="luxury-stripes absolute inset-0" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_32%_28%,rgba(240,208,128,0.18),transparent_55%)]" />
          <div className="hero-grain" />
          {/* faint house monogram */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="select-none font-serif text-[18vw] font-black leading-none text-gold/[0.06]">
              AD
            </span>
          </div>
          {/* atelier frame */}
          <div className="absolute inset-7 border border-gold/15" />
          {/* blend into the content half */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-dark" />
        </div>
        <div className="hidden lg:block bg-dark" />
      </div>
      {/* gold gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_50%,rgba(201,168,76,0.1),transparent_50%)]" />

      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } }}
        className="relative z-10 ml-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 md:px-12 lg:w-1/2 lg:pl-16 lg:pr-20"
      >
        <motion.span
          variants={itemVariants}
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          The Luxury Wing
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="mt-6 font-serif text-3xl leading-tight text-white md:text-5xl"
        >
          Where the world's
          <br />
          most prestigious brands
          <br />
          <span className="text-gradient-gold italic">choose to be.</span>
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="mt-8 flex max-w-md flex-wrap items-center gap-x-2 gap-y-2 font-serif text-lg text-white/90 md:text-xl"
        >
          {LUXURY_BRANDS.map((b, i) => (
            <span key={b} className="flex items-center gap-2">
              {b}
              {i < LUXURY_BRANDS.length - 1 && (
                <span className="text-gold">·</span>
              )}
            </span>
          ))}
          <span className="text-sm text-dim">+ 40 more</span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="mt-8 border-l-2 border-gold pl-4 text-sm text-white/80"
        >
          Average luxury spend:{' '}
          <span className="font-serif text-2xl text-gradient-gold">3×</span> the national
          mall average.
        </motion.p>

        <motion.button
          variants={itemVariants}
          onClick={() => open('Leasing')}
          className="mt-9 inline-flex w-fit items-center gap-2 text-sm uppercase tracking-[0.15em] text-gold transition-colors hover:text-gold-light"
        >
          Explore Luxury Leasing <span aria-hidden>→</span>
        </motion.button>
      </motion.div>
    </section>
  )
}
