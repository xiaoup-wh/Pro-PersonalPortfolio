/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          400: '#22d3ee',
          500: '#06b6d4',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out-infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(6, 182, 212, 0.4)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 45px rgba(59, 130, 246, 0.4)',
        'glow-accent': '0 0 30px rgba(6, 182, 212, 0.3)',
      },
    },
  },
  plugins: [],
}
