import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { HERO_VIDEO_ID } from '../data'

interface VideoModalProps {
  open: boolean
  onClose: () => void
}

export default function VideoModal({ open, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />
          <button
            onClick={onClose}
            aria-label="Close video"
            className="absolute right-6 top-6 z-20 text-white/70 transition-colors hover:text-gold"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            </svg>
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 aspect-video w-full max-w-5xl overflow-hidden rounded-xl border border-dark-3 shadow-2xl"
          >
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
              title="American Dream — The Story"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
