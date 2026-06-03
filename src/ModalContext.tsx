import { createContext, useContext, useState, type ReactNode } from 'react'
import type { InquiryType } from './data'

interface ModalContextValue {
  isOpen: boolean
  defaultInquiry: InquiryType
  open: (inquiry?: InquiryType) => void
  close: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [defaultInquiry, setDefaultInquiry] = useState<InquiryType>('General')

  const open = (inquiry: InquiryType = 'General') => {
    setDefaultInquiry(inquiry)
    setIsOpen(true)
  }
  const close = () => setIsOpen(false)

  return (
    <ModalContext.Provider value={{ isOpen, defaultInquiry, open, close }}>
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
