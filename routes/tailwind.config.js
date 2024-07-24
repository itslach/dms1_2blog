module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        customLightGrey: '#d3d3d3', 
      },
      fontFamily: {
        sans: ['"Prompt"', '"Bebas Neue"', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}