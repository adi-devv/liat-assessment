import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Self-hosted fonts — same-origin, only the weights actually used. Keeps the
// deck fully self-contained (no Google Fonts round-trip) and speeds up paint.
import '@fontsource/playfair-display/400.css'
import '@fontsource/playfair-display/400-italic.css'
import '@fontsource/playfair-display/900.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
