import { Component, type ErrorInfo, type ReactNode } from 'react'

interface Props {
  children: ReactNode
}
interface State {
  hasError: boolean
}

/**
 * Catches render-time errors anywhere in the deck and shows an on-brand
 * fallback instead of a blank screen — so a single bad section never takes
 * down the whole experience during a live pitch.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Surface for debugging; in production this could ship to an error service.
    console.error('Deck render error:', error, info.componentStack)
  }

  render() {
    if (!this.state.hasError) return this.props.children

    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-dark px-6 text-center">
        <span className="font-serif text-sm tracking-[0.3em] text-gold">
          AMERICAN DREAM
        </span>
        <h1 className="mt-6 font-serif text-3xl text-white md:text-4xl">
          Something interrupted the experience.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-dim">
          We hit an unexpected error rendering the deck. Reloading usually
          resolves it.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 rounded-md bg-gradient-gold px-7 py-3 text-xs font-medium uppercase tracking-[0.2em] text-dark transition-transform duration-200 hover:scale-105"
        >
          Reload the Deck
        </button>
      </div>
    )
  }
}
