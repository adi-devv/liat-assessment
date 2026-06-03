import { useCountUp } from '../../hooks'

interface StatCounterProps {
  value: number
  active: boolean
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export default function StatCounter({
  value,
  active,
  label,
  prefix = '',
  suffix = '',
  decimals = 0,
}: StatCounterProps) {
  const display = useCountUp(value, active, 1500, decimals)

  return (
    <div className="group border-l border-dark-3 pl-5 py-2">
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-gradient-gold tabular-nums leading-none">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.2em] text-dim">
        {label}
      </div>
    </div>
  )
}
