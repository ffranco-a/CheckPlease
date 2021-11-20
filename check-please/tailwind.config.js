module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        logo: '3.5rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
