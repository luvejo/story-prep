/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],

  theme: {
    colors: {
      orange: {
        300: '#E1956B',
        400: '#BD6737',
        600: '#C64B07',
        700: '#7E3106',
      },
      brown: {
        50: '#A59F9A',
        100: '#76706A',
        600: '#292522',
        700: '#26221F',
      },
      blue: {
        500: '#3781BD',
        600: '#2D88AF',
        700: '#0C5177',
      },
      green: {
        600: '#80822D',
      },
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif'],
      londrina: ['Londrina Solid', 'cursive'],
    },
  },

  plugins: [],
}
