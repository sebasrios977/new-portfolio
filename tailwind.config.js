/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['class', "[data-theme='dark']"],
  theme: {
    extend: {
      // Colours resolve from the CSS variables defined in index.css, so every
      // utility follows the active theme. The `<alpha-value>` placeholder keeps
      // Tailwind's opacity modifiers working (e.g. `text-port-green/60`).
      colors: {
        'port-bg':       'rgb(var(--port-bg) / <alpha-value>)',
        'port-card':     'rgb(var(--port-card) / <alpha-value>)',
        'port-card2':    'rgb(var(--port-card2) / <alpha-value>)',
        'port-border':   'rgb(var(--port-border) / <alpha-value>)',
        'port-green':    'rgb(var(--port-green) / <alpha-value>)',
        'port-teal':     'rgb(var(--port-teal) / <alpha-value>)',
        'port-blue':     'rgb(var(--port-blue) / <alpha-value>)',
        'port-text':     'rgb(var(--port-text) / <alpha-value>)',
        'port-sub':      'rgb(var(--port-sub) / <alpha-value>)',
        'port-muted':    'rgb(var(--port-muted) / <alpha-value>)',
        'port-on-green': 'rgb(var(--port-on-green) / <alpha-value>)',
      },
      fontFamily: {
        mono:    ["'Space Mono'", 'monospace'],
        display: ["'Space Grotesk'", 'sans-serif'],
        body:    ["'Inter'", 'sans-serif'],
      },
    },
  },
  plugins: [],
}
