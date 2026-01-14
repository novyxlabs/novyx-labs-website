import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        // Infrastructure dark palette
        void: {
          DEFAULT: '#0A0E27',
          50: '#E8EAF1',
          100: '#C1C6DC',
          200: '#9AA2C7',
          300: '#737EB2',
          400: '#4C5A9D',
          500: '#3A4574',
          600: '#2C355A',
          700: '#1E2541',
          800: '#141832',
          900: '#0A0E27',
        },
        steel: {
          DEFAULT: '#8B92AB',
          50: '#F5F6F8',
          100: '#E1E3E9',
          200: '#C3C7D3',
          300: '#A5ABBD',
          400: '#8B92AB',
          500: '#6B7389',
          600: '#545969',
          700: '#3D4049',
          800: '#262729',
          900: '#0F0F0F',
        },
        pulse: {
          DEFAULT: '#4A90E2',
          50: '#EBF5FF',
          100: '#D6EAFF',
          200: '#ADD5FF',
          300: '#85C0FF',
          400: '#5CABFF',
          500: '#4A90E2',
          600: '#2E73C4',
          700: '#1F5694',
          800: '#143A64',
          900: '#0A1D34',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
        'neural-pulse': 'neural-pulse 20s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'neural-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundSize: {
        '200': '200% auto',
      },
    },
  },
  plugins: [],
}
export default config





