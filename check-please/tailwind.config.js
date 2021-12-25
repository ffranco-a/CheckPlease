module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        logo: '3.5rem',
      },
      colors: {
        dark: '#303841',
        medium: '#47555E',
        light: '#E8ECF1',
        primary: '#1E5F74',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
