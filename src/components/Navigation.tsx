import { motion } from 'framer-motion'
import { SECTIONS } from '../data'
import { useModal } from '../ModalContext'

interface NavigationProps {
  activeIndex: number
  onNavigate: (id: string) => void
}

export default function Navigation({ activeIndex, onNavigate }: NavigationProps) {
  const { open } = useModal()
  const onHero = activeIndex === 0

  return (
    <>
      {/* Top-left wordmark */}
      <motion.button
        onClick={() => onNavigate('hero')}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed left-6 top-6 z-50 md:left-10 md:top-8 text-left"
      >
        <span className="block font-serif text-sm md:text-base tracking-[0.3em] text-gold">
          AMERICAN DREAM
        </span>
        <span className="block text-[10px] tracking-[0.25em] text-dim mt-0.5">
          EAST RUTHERFORD, NJ
        </span>
      </motion.button>

      {/* Top-right request meeting button */}
      <motion.button
        onClick={() => open('General')}
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="fixed right-6 top-6 z-50 md:right-10 md:top-8 rounded-md border border-gold/70 px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
      >
        Request a Meeting
      </motion.button>

      {/* Right-side dot navigation */}
      <nav
        aria-label="Section navigation"
        className="fixed right-5 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-end gap-4 md:flex"
      >
        {SECTIONS.map((section, i) => {
          const active = i === activeIndex
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className="group flex items-center gap-3"
              aria-label={section.label}
              aria-current={active ? 'true' : undefined}
            >
              <span className="pointer-events-none translate-x-2 whitespace-nowrap text-[10px] uppercase tracking-[0.2em] text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                {section.label}
              </span>
              <motion.span
                animate={{
                  height: active ? 24 : 8,
                  backgroundColor: active ? '#c9a84c' : '#444444',
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`block w-[3px] rounded-full ${active ? 'dot-glow' : ''} group-hover:bg-gold`}
              />
            </button>
          )
        })}
      </nav>

      {/* Progress bar for mobile (no dots) */}
      <div className="fixed bottom-0 left-0 z-50 h-[2px] w-full bg-dark-3 md:hidden">
        <motion.div
          className="h-full bg-gold"
          animate={{
            width: `${((activeIndex + 1) / SECTIONS.length) * 100}%`,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* subtle vignette only off-hero to keep nav legible — purely decorative */}
      {!onHero && (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-40 h-24 bg-gradient-to-b from-black/60 to-transparent" />
      )}
    </>
  )
}
