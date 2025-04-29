/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        'base': 'var(--font-size-base, 1rem)',
      },
      spacing: {
        '18': '4.5rem',
      },
      minHeight: {
        '11': '2.75rem',
      },
      minWidth: {
        '11': '2.75rem',
      },
      colors: {
        // Paleta de cores otimizada para idosos
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
        },
      },
    },
  },
  plugins: [],
};