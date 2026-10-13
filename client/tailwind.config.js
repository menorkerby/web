/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080D18',
        'bg-elevated': '#0E1729',
        surface: '#111E31',
        'surface-hover': '#16253B',
        line: 'rgba(173, 194, 226, 0.14)',
        'text-primary': '#F6F9FF',
        'text-secondary': '#A9B7CC',
        'text-muted': '#8192AB',
        brand: '#5475FF',
        'brand-light': '#8D9DFF',
        accent: '#36D6DF',
        success: '#5AD4A6',
        error: '#FF7E93',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Manrope', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': 'clamp(3.7rem, 6vw, 6.6rem)',
        'hero-mobile': 'clamp(2.65rem, 11vw, 4rem)',
      },
      letterSpacing: {
        hero: '-0.055em',
        tight: '-0.035em',
      },
      borderRadius: {
        button: '12px',
        card: '22px',
        'card-lg': '26px',
        pill: '999px',
      },
      maxWidth: {
        container: '1240px',
      },
      backgroundImage: {
        'hero-text': 'linear-gradient(115deg, #F6F9FF 10%, #AFC2FF 62%, #64DDE6 100%)',
        'brand-btn': 'linear-gradient(110deg, #5577FF, #6D66F7)',
        'brand-btn-hover': 'linear-gradient(110deg, #6688ff, #7e77f8)',
        'card-glow': 'radial-gradient(ellipse at top right, rgba(84, 117, 255, 0.12), transparent 70%)',
        'grid-dots': 'radial-gradient(circle, rgba(173,194,226,0.15) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dots-sm': '20px 20px',
        'dots-md': '28px 28px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'float': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      boxShadow: {
        'card-hover': '0 8px 40px rgba(84, 117, 255, 0.15), 0 2px 12px rgba(0,0,0,0.3)',
        'hero-visual': '0 24px 64px rgba(0,0,0,0.45), 0 4px 24px rgba(84,117,255,0.1)',
        'brand-glow': '0 0 32px rgba(84,117,255,0.35)',
      },
    },
  },
  plugins: [],
};
