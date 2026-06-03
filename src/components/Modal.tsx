import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useModal } from '../ModalContext'
import type { InquiryType } from '../data'

const INQUIRY_OPTIONS: InquiryType[] = [
  'Leasing',
  'Sponsorship',
  'Event Booking',
  'General',
]

export default function Modal() {
  const { isOpen, defaultInquiry, close } = useModal()
  const [submitted, setSubmitted] = useState(false)
  const [inquiry, setInquiry] = useState<InquiryType>(defaultInquiry)

  // Reset state when the modal (re)opens.
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false)
      setInquiry(defaultInquiry)
    }
  }, [isOpen, defaultInquiry])

  // Escape to close + lock background scroll.
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, close])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-dark-3 bg-dark-2 p-8 shadow-2xl max-h-[90vh] overflow-y-auto no-scrollbar"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 text-dim transition-colors hover:text-gold"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="text-center">
              <span className="font-serif text-sm tracking-[0.3em] text-gold">
                AMERICAN DREAM
              </span>
            </div>

            {!submitted ? (
              <>
                <h2 className="mt-4 text-center font-serif text-3xl text-white">
                  Request a Meeting
                </h2>
                <p className="mt-2 text-center text-sm text-dim">
                  Tell us about your brand and we'll be in touch within one business day.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field label="Name" required name="name" />
                    <Field label="Company" required name="company" />
                  </div>
                  <Field label="Email" required type="email" name="email" />
                  <Field label="Role" name="role" placeholder="Optional" />

                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-dim">
                      Type of Inquiry
                    </label>
                    <select
                      value={inquiry}
                      onChange={(e) => setInquiry(e.target.value as InquiryType)}
                      className="w-full rounded-md border border-dark-3 bg-dark px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                    >
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-dim">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Optional"
                      className="w-full resize-none rounded-md border border-dark-3 bg-dark px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-dim/60 focus:border-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-gradient-gold py-3.5 text-sm font-medium uppercase tracking-[0.2em] text-dark transition-transform duration-200 hover:scale-[1.01]"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center py-10 text-center"
              >
                <motion.svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  className="mb-6"
                >
                  <motion.circle
                    cx="36"
                    cy="36"
                    r="33"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />
                  <motion.path
                    d="M22 37l10 10 18-20"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: 'easeInOut' }}
                  />
                </motion.svg>
                <h2 className="font-serif text-3xl text-white">Thank you.</h2>
                <p className="mt-3 max-w-sm text-sm text-dim">
                  Your {inquiry.toLowerCase()} inquiry has been received. A member of the
                  American Dream partnerships team will reach out shortly.
                </p>
                <button
                  onClick={close}
                  className="mt-7 rounded-md border border-gold/60 px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-dark"
                >
                  Close
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface FieldProps {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
}

function Field({ label, name, type = 'text', required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.15em] text-dim">
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-md border border-dark-3 bg-dark px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-dim/60 focus:border-gold"
      />
    </div>
  )
}
