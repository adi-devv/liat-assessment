interface TickerProps {
  items: string[]
}

export default function Ticker({ items }: TickerProps) {
  // Duplicate the list so the -50% translate loop is seamless.
  const doubled = [...items, ...items]

  return (
    <div className="w-full overflow-hidden border-t border-dark-3 bg-black/40 backdrop-blur-sm py-3">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-6 inline-flex items-center text-xs md:text-sm tracking-[0.25em] uppercase text-dim"
          >
            <span className="text-gold mr-6">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
