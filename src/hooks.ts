import { useEffect, useRef, useState } from 'react'

/**
 * Reports the user's `prefers-reduced-motion` setting and keeps it live.
 * Used to disable autoplay video, heavy ambient animation, and smooth-scroll
 * for visitors who opt out of motion.
 */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return reduced
}

/**
 * Returns `false` on first paint, then flips to `true` once the browser is idle
 * (or after `delay` ms as a fallback). Used to defer non-critical, expensive
 * mounts — e.g. the hero's background video — so they never block first paint,
 * keeping the deck fast and self-contained even if the network is slow.
 */
export function useIdleFlag(delay = 1200): boolean {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let timer: number
    type IdleWindow = Window &
      typeof globalThis & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number
        cancelIdleCallback?: (handle: number) => void
      }
    const w = window as IdleWindow

    if (typeof w.requestIdleCallback === 'function') {
      const handle = w.requestIdleCallback(() => setReady(true), { timeout: delay })
      return () => w.cancelIdleCallback?.(handle)
    }

    timer = window.setTimeout(() => setReady(true), delay)
    return () => window.clearTimeout(timer)
  }, [delay])

  return ready
}

/**
 * Tracks whether a referenced element is currently within the viewport.
 * Used to trigger section entrance animations on scroll-snap.
 */
export function useInViewOnce<T extends HTMLElement>(
  threshold = 0.3,
): [React.RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

/**
 * Counts up from 0 to `target` over `duration` ms once `active` becomes true.
 * Uses requestAnimationFrame with an ease-out curve.
 */
export function useCountUp(
  target: number,
  active: boolean,
  duration = 1500,
  decimals = 0,
): string {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let raf = 0
    let start = 0

    const tick = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(target * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
      else setValue(target)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])

  return value.toFixed(decimals)
}
