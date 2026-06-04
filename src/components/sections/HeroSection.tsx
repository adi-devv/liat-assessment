import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HERO_VIDEO_ID, TICKER_ITEMS } from '../../data'
import { usePrefersReducedMotion } from '../../hooks'
import Ticker from '../ui/Ticker'

interface HeroSectionProps {
  onExplore: () => void
  onWatch: () => void
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.35 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export default function HeroSection({ onExplore, onWatch }: HeroSectionProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [ambientOn, setAmbientOn] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  // `?novideo` hard-disables the background video (QA / low-bandwidth demos).
  const noVideoParam =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('novideo')

  // The background film is OPT-IN. The generative visual below carries the
  // hero on its own and keeps the initial load fast & fully self-contained
  // (no ~940 KB YouTube payload unless the viewer asks for it). The real
  // footage is always one click away via "Watch the Story".
  const showVideo = ambientOn && !reducedMotion && !noVideoParam
  const ambientAvailable = !reducedMotion && !noVideoParam

  useEffect(() => {
    if (!showVideo) {
      setVideoReady(false)
      return
    }
    const t = window.setTimeout(() => setVideoReady(true), 2000)
    return () => window.clearTimeout(t)
  }, [showVideo])

  return (
    <section id="hero" className="section">
      {/* ---------------------------------------------------------------- */}
      {/* Self-contained cinematic background (paints instantly, no network) */}
      {/* ---------------------------------------------------------------- */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-dark" aria-hidden="true">
        {/* Drifting aurora mesh — the signature ambient layer */}
        <div className={`hero-aurora ${reducedMotion ? 'hero-aurora--static' : ''}`}>
          <span className="hero-blob hero-blob--gold" />
          <span className="hero-blob hero-blob--amber" />
          <span className="hero-blob hero-blob--indigo" />
        </div>

        {/* Opt-in real footage, fading in beneath the overlays */}
        {showVideo && (
          <iframe
            className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-[100vh] w-[177.78vh] min-w-[100vw] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-[1500ms] ease-out"
            style={{ opacity: videoReady ? 0.55 : 0 }}
            src={`https://www.youtube-nocookie.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1`}
            title="American Dream — ambient background footage"
            tabIndex={-1}
            aria-hidden="true"
            allow="autoplay; encrypted-media"
            onLoad={() => setVideoReady(true)}
          />
        )}

        {/* Slow diagonal light sweep */}
        {!reducedMotion && <div className="hero-sweep" />}

        {/* Floating gold particles */}
        {!reducedMotion && <Particles />}

        {/* Film grain + legibility vignettes */}
        <div className="hero-grain" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/55" />
      </div>

      {/* Centered content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          variants={item}
          className="text-xs md:text-sm uppercase tracking-[0.4em] text-gold"
        >
          East Rutherford, New Jersey
        </motion.span>

        <motion.h1
          variants={item}
          className="hero-title mt-6 font-serif font-black uppercase tracking-[0.05em] text-white"
        >
          American
          <br />
          <span className="text-gradient-gold">Dream</span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mx-auto mt-8 h-px w-32 bg-gradient-gold"
        />

        <motion.p
          variants={item}
          className="mt-8 text-base md:text-xl tracking-[0.15em] text-white/80"
        >
          America's Most Iconic Destination
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <button
            onClick={onExplore}
            className="rounded-md bg-gradient-gold px-8 py-3.5 text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-dark transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
          >
            Explore the Opportunity
          </button>
          <button
            onClick={onWatch}
            className="group flex items-center gap-3 rounded-md border border-white/40 px-8 py-3.5 text-xs md:text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M2 1.5v11l10-5.5z" />
            </svg>
            Watch the Story
          </button>
        </motion.div>
      </motion.div>

      {/* Opt-in ambient-film toggle — keeps the default load fast (no YouTube
          payload) while leaving the background film discoverable. */}
      {ambientAvailable && (
        <button
          onClick={() => setAmbientOn((v) => !v)}
          aria-pressed={ambientOn}
          className="absolute bottom-24 right-6 z-10 hidden items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm transition-colors duration-300 hover:border-gold/60 hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold sm:inline-flex"
        >
          <svg width="11" height="11" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            {ambientOn ? (
              <path d="M3 2h3v10H3zM8 2h3v10H8z" />
            ) : (
              <path d="M2 1.5v11l10-5.5z" />
            )}
          </svg>
          {ambientOn ? 'Pause film' : 'Ambient film'}
        </button>
      )}

      {/* Scroll indicator */}
      <button
        onClick={onExplore}
        aria-label="Scroll to next section"
        className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
      >
        <svg
          className={reducedMotion ? 'text-gold/70' : 'chevron-bounce text-gold/70'}
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Lower-third ticker */}
      <div className="absolute bottom-0 left-0 z-10 w-full">
        <Ticker items={TICKER_ITEMS} />
      </div>
    </section>
  )
}

function Particles() {
  // Deterministic, lightweight floating particle field.
  const particles = Array.from({ length: 18 })
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((_, i) => {
        const left = (i * 53) % 100
        const size = 1 + (i % 3)
        const delay = (i % 9) * 1.6
        const duration = 16 + (i % 6) * 2.5
        return (
          <span
            key={i}
            className="absolute bottom-0 rounded-full bg-gold/80"
            style={{
              left: `${left}%`,
              width: size,
              height: size,
              animation: `floatParticle ${duration}s linear ${delay}s infinite`,
            }}
          />
        )
      })}
    </div>
  )
}
