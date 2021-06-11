const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '3200px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      indigo: colors.indigo,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10% ': { transform: 'rotate(-10deg)' },
          '20% ': { transform: 'rotate(12deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '40% ': { transform: 'rotate(9deg)' },
          '50% ': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        wave: 'wave 1.5s infinite',
      },
    },
    boxShadow: {
      lg: '10px 10px 11px 0px rgba(0,0,0,0.75)',
      sm: '10px 10px 11px 0px rgba(71,67,71,1)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
