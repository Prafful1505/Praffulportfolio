/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        ink: {
          950: '#05070d',
          900: '#080b14',
          850: '#0b1020',
          800: '#101728',
          700: '#18203a',
        },
        brand: {
          50: '#effcfa',
          100: '#c9f7ef',
          200: '#96ede1',
          300: '#5adecf',
          400: '#2ec7ba',
          500: '#14b0a4',
          600: '#0b8b85',
          700: '#0d6f6b',
          800: '#0f5856',
          900: '#114948',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      maxWidth: {
        content: '76rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(45,212,191,0.16), 0 18px 60px -18px rgba(45,212,191,0.35)',
        card: '0 24px 70px -30px rgba(2,6,23,0.9)',
        lift: '0 30px 80px -32px rgba(45,212,191,0.45)',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, transparent, #05070d), linear-gradient(rgba(148,163,184,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.07) 1px, transparent 1px)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%, -6%, 0) scale(1.08)' },
          '66%': { transform: 'translate3d(-5%, 4%, 0) scale(0.95)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.6)', opacity: '0' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        caret: {
          '0%, 45%': { opacity: '1' },
          '50%, 95%': { opacity: '0' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        drift: 'drift 22s ease-in-out infinite',
        'spin-slow': 'spinSlow 34s linear infinite',
        'spin-slower': 'spinSlow 52s linear infinite reverse',
        shimmer: 'shimmer 6s linear infinite',
        marquee: 'marquee 38s linear infinite',
        'pulse-ring': 'pulseRing 2.6s cubic-bezier(0.24,0.6,0.35,1) infinite',
        caret: 'caret 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
