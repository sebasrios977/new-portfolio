/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'port-bg':     '#0B1120',
        'port-card':   '#111827',
        'port-card2':  '#1A2535',
        'port-border': '#1E3A5F',
        'port-green':  '#00E587',
        'port-teal':   '#5EEAD4',
        'port-blue':   '#1A2E4A',
        'port-text':   '#F0F6FF',
        'port-sub':    '#7EA8C4',
        'port-muted':  '#3D6080',
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
