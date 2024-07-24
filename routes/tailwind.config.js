module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colours: {
        customLightGrey: 'd3d3d3',
      },
      fontFamily: {
        sans: ['"Prompt"', '"Bebas Neue"', 'sans-serif'], // Include both fonts in the same array
      },
    },
  },
  variants: {},
  plugins: [],
}