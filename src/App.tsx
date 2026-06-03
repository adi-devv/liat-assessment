import { useCallback, useEffect, useRef, useState } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Modal from './components/Modal'
import Navigation from './components/Navigation'
import VideoModal from './components/VideoModal'
import ContactSection from './components/sections/ContactSection'
import DiningSection from './components/sections/DiningSection'
import EntertainmentSection from './components/sections/EntertainmentSection'
import EventsSection from './components/sections/EventsSection'
import HeroSection from './components/sections/HeroSection'
import LeasingModule from './components/sections/LeasingModule'
import LuxurySection from './components/sections/LuxurySection'
import RetailSection from './components/sections/RetailSection'
import ScaleSection from './components/sections/ScaleSection'
import SponsorshipModule from './components/sections/SponsorshipModule'
import { SECTIONS } from './data'
import { usePrefersReducedMotion } from './hooks'
import { ModalProvider, useModal } from './ModalContext'

function Deck() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const deckRef = useRef<HTMLDivElement>(null)
  // Mirror activeIndex into a ref so the global key handler stays current
  // without re-binding the listener on every section change.
  const activeIndexRef = useRef(0)
  const { isOpen: contactModalOpen } = useModal()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const deck = deckRef.current
    if (!deck) return

    const sectionEls = SECTIONS.map((s) =>
      document.getElementById(s.id),
    ).filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionEls.indexOf(entry.target as HTMLElement)
            if (index !== -1) setActiveIndex(index)
          }
        })
      },
      { root: deck, threshold: 0.5 },
    )

    sectionEls.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navigateTo = useCallback(
    (id: string) => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' })
    },
    [reducedMotion],
  )

  const navigateToIndex = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(SECTIONS.length - 1, index))
      navigateTo(SECTIONS[clamped].id)
    },
    [navigateTo],
  )

  const goToNext = useCallback(
    () => navigateToIndex(activeIndexRef.current + 1),
    [navigateToIndex],
  )

  // Keyboard navigation — treat the deck like a real presentation.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (contactModalOpen || videoModalOpen) return
      const tag = document.activeElement?.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          navigateToIndex(activeIndexRef.current + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          navigateToIndex(activeIndexRef.current - 1)
          break
        case 'Home':
          e.preventDefault()
          navigateToIndex(0)
          break
        case 'End':
          e.preventDefault()
          navigateToIndex(SECTIONS.length - 1)
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [contactModalOpen, videoModalOpen, navigateToIndex])

  return (
    <>
      <Navigation activeIndex={activeIndex} onNavigate={navigateTo} />

      <div ref={deckRef} className="deck-container">
        <HeroSection
          onExplore={goToNext}
          onWatch={() => setVideoModalOpen(true)}
        />
        <ScaleSection />
        <RetailSection onLeasing={() => navigateTo('leasing')} />
        <LuxurySection />
        <DiningSection />
        <EntertainmentSection />
        <EventsSection />
        <LeasingModule />
        <SponsorshipModule />
        <ContactSection />
      </div>

      <Modal />
      <VideoModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </>
  )
}

export default function App() {
  return (
    <ErrorBoundary>
      <ModalProvider>
        <Deck />
      </ModalProvider>
    </ErrorBoundary>
  )
}
