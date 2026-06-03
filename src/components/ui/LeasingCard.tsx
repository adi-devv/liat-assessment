import { motion } from 'framer-motion'
import type { LeasingPath } from '../../data'
import { useModal } from '../../ModalContext'

interface LeasingCardProps {
  path: LeasingPath
  index: number
}

export default function LeasingCard({ path, index }: LeasingCardProps) {
  const { open } = useModal()

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col rounded-xl border-t-2 border-t-gold border-x border-b border-dark-3 bg-dark-2/60 p-7 transition-shadow duration-500 hover:shadow-[0_0_40px_-8px_rgba(201,168,76,0.4)] will-change-transform"
    >
      <span className="font-serif text-5xl text-dark-3 transition-colors duration-500 group-hover:text-gold/40">
        {path.kicker}
      </span>

      <h3 className="mt-3 font-serif text-2xl md:text-3xl text-white">
        {path.title}
      </h3>
      <p className="mt-3 text-sm text-dim leading-relaxed">{path.pitch}</p>

      <dl className="mt-6 space-y-3 border-t border-dark-3 pt-5">
        {path.rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-4 text-sm">
            <dt className="uppercase tracking-[0.15em] text-dim text-xs pt-0.5">
              {row.label}
            </dt>
            <dd className="text-right text-white/90">{row.value}</dd>
          </div>
        ))}
      </dl>

      <button
        onClick={() => open(path.inquiry)}
        className="mt-7 w-full rounded-md border border-gold/60 py-3 text-xs uppercase tracking-[0.2em] text-gold transition-colors duration-300 hover:bg-gold hover:text-dark"
      >
        {path.cta}
      </button>
    </motion.div>
  )
}
