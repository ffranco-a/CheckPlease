module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .5s ease-in 1',
        fadein: 'fadein 1s ease-in-out 1',
      },
      colors: {
        dark: '#303841',
        medium: '#47555E',
        light: '#E8ECF1',
        text: '#DEE4EB',
        primary: '#1E5F74',
        'primary-dark': '#164655',
        'primary-light': '#4D8191',
        complementary: '#4B4B4B',
      },
      gridTemplateColumns: {
        '3-expenses': '35% 25% 35% minmax(20px, 5%)',
      },
      keyframes: {
        wiggle: {
          '0%, 35%': { transform: 'rotate(-7deg)' },
          '15%, 60%': { transform: 'rotate(7deg)' },
          '100%': { transform: 'none' },
        },
        fadein: {
          '0%': { transform: 'translateY(10px)', filter: 'blur(2px)', opacity: 0 },
          '75%': { transform: 'translateY(1px)', filter: 'blur(.5px)' },
          '100%': '',
        }
      },
      minWidth: {
        logo: '3.5rem',
      },
      screens: {
        mobile: '380px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
