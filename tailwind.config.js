/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: 'var(--color-void)',
        ink: 'var(--color-ink)',
        carbon: 'var(--color-carbon)',
        panel: 'var(--color-panel)',
        text: 'var(--color-text)',
        muted: 'var(--color-muted)',
        cyan: 'var(--color-cyan)',
        green: 'var(--color-green)',
        violet: 'var(--color-violet)',
        amber: 'var(--color-amber)',
        line: 'var(--color-line)',
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        crisp: 'var(--shadow-deep)',
        soft: 'var(--shadow-soft)',
      },
    },
  },
  plugins: [],
}
