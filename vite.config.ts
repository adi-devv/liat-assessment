import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Project Pages live under /liat-assessment/, so the production build needs
// that base for assets to resolve. Dev keeps '/' for a clean localhost root.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/liat-assessment/' : '/',
}))
