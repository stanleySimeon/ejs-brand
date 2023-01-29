/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nayanika: ['Nayanika', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        ejs: {
          DEFAULT: '#05396d',
          primary: '#6355ac',
          secondary: '#00b3d1',
          gray: '#a9b1b7',
          white: '#ffffff',
          black: '#000000',
        },
      },
      container: {
        center: true,
        width: {
          sm: '640px',
          md: '768px',
          lg: '991px',
          xl: '1024px',
          '2xl': '1280px',
        },
      },
    },
  },
  /* eslint-disable global-require */
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};
