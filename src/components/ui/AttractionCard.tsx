import { motion } from 'framer-motion'
import type { Attraction } from '../../data'

interface AttractionCardProps {
  attraction: Attraction
  index: number
}

export default function AttractionCard({ attraction, index }: AttractionCardProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.03 }}
      className="group relative overflow-hidden rounded-xl border border-dark-3 bg-dark-2/60 p-6 cursor-default will-change-transform"
      style={{ contain: 'layout' }}
    >
      {/* thematic color wash on hover */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(120% 120% at 0% 0%, ${attraction.color}22, transparent 60%)`,
        }}
      />
      <div
        className="absolute left-0 top-0 h-full w-[3px] transition-all duration-500 group-hover:w-1"
        style={{ background: attraction.color }}
      />

      <div className="relative">
        <div className="text-4xl mb-4">{attraction.icon}</div>
        <h3 className="font-serif text-xl md:text-2xl text-white leading-tight">
          {attraction.name}
        </h3>
        <p className="mt-2 text-sm text-dim">{attraction.tagline}</p>

        <div
          className="mt-4 inline-block text-xs font-medium uppercase tracking-[0.2em]"
          style={{ color: attraction.color }}
        >
          {attraction.stat}
        </div>

        {/* deeper detail revealed on hover */}
        <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr]">
          <div className="overflow-hidden">
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {attraction.detail}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
