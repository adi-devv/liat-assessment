/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c9a84c',
        'gold-light': '#f0d080',
        dark: '#050505',
        'dark-2': '#0f0f0f',
        'dark-3': '#1a1a1a',
        dim: '#888888',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #c9a84c, #f0d080, #c9a84c)',
      },
      letterSpacing: {
        ultrawide: '0.35em',
      },
    },
  },
  plugins: [],
}
