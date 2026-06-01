/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        ink: {
          50: '#f0f4ff',
          100: '#dde5ff',
          200: '#c2ceff',
          300: '#9aadff',
          400: '#6f84ff',
          500: '#4a5eff',
          600: '#2f3ef5',
          700: '#2430e0',
          800: '#2029b5',
          900: '#20278f',
          950: '#141759',
        },
        slate: {
          850: '#1a2238',
          900: '#0f172a',
          950: '#070d1a',
        },
        gold: {
          400: '#f5c842',
          500: '#e8b400',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
        }
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'slide-right': 'slideRight 0.6s ease forwards',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, rgba(74,94,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(74,94,255,0.07) 1px, transparent 1px)",
        'dot-pattern': "radial-gradient(circle, rgba(74,94,255,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid': '40px 40px',
        'dot': '24px 24px',
      }
    },
  },
  plugins: [],
}
