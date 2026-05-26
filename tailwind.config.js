/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  safelist: [
    'btn-primary', 'btn-secondary', 'btn-ghost', 'btn-ghost-dark',
    'btn-signal', 'btn-success', 'btn-danger',
    'btn-sm', 'btn-md', 'btn-lg',
  ],
  theme: {
    extend: {
      colors: {
        indigo: {
          50:  '#EEF0FF',
          100: '#E0E4FF',
          300: '#9AA1F8',
          500: '#5A5AEE',
          600: '#4F46E5',
          700: '#3F36BF',
          800: '#2E2899',
          900: '#1E1B4B',
          950: '#0F0D2B',
        },
        sand: {
          50:  '#FBF8F2',
          100: '#F5EFE2',
          200: '#EAE7F2',
          300: '#DEDAE8',
          400: '#9896A8',
          500: '#6C6A85',
          700: '#4A4862',
        },
        ink: {
          DEFAULT: '#2B2844',
          darkest: '#0F0D2B',
        },
        signal: {
          DEFAULT: '#E8C547',
          50:  '#FDF9E8',
          200: '#F5E6A8',
          700: '#8A6A0F',
        },
        brand: {
          success:   '#2F9E6A',
          successBg: '#E8F5EE',
          danger:    '#C03A3A',
          dangerBg:  '#FBEBEB',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Helvetica Neue', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        card: '14px',
        btn:  '10px',
        chip: '8px',
      },
      boxShadow: {
        soft: '0 1px 0 rgba(15,13,43,.04), 0 1px 2px rgba(15,13,43,.04)',
        card: '0 1px 0 rgba(15,13,43,.04), 0 8px 24px -8px rgba(15,13,43,.10)',
        lift: '0 30px 60px -20px rgba(49,46,129,.25), 0 10px 20px -10px rgba(15,13,43,.10)',
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
}
