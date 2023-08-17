/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      dropShadow:{
        'btn-shadow': '0px 0px 34px rgba(255, 255, 255, 0.25)',
        'blk-shadow': '0px 0px 34px rgba(0, 0, 0, 0.25)',
        'ftr-shadow': '0px 0px 34px rgba(255, 255, 255, 1)',
      },
      keyframes: {
        slideOut: {
          '0%': {transform: 'translateY(0)', visibility: 'visible'},
          '100%': {transform: 'translateY(-100%)', visibility: 'hidden'}
        },
        fadeInPulse: {
          '0%': {opacity: '0'},
          '70%, 100%': {opacity: '1'},
          '90%': {opacity: '0.5'}
        },
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        slideUp: {
          '0%': {transform: 'translateY(700px)', visibility: 'hidden'},
          '100%': {transform: 'translateY(0)', visibility: 'visible'}
        },
        pulse:{
          '0%, 100': {opacity: '1'},
          '50%': {opacity: '0.5'}
        },
        slideDown: {
          '0%': {transform: 'translateY(-50px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        slideLeft: {
          '0%': {transform: 'translateX(200px)'},
          '100%': {transform: 'translateX(0)'}
        },

      },
      animation:{
        slideOut: 'slideOut 1s 2.5s ease-in-out forwards',
        fadeInPulse: 'fadeInPulse 2s ease-in-out forwards;',
        fadeIn: 'fadeIn 1s 4s ease-in-out forwards',
        shadowUp: 'slideUp 1s 2.5s ease-in-out forwards, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        slideUp: 'slideUp 1.5s 2.5s ease-in-out forwards',
        slideDown: 'slideDown 1s 3s ease-in-out forwards',
        slideLeft: 'slideLeft 1.5s 2.5s ease-in-out forwards',
        moonUp: 'slideUp 1.5s 3s ease-in-out forwards, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        treesUp: 'slideUp 1.5s 2.7s ease-in-out forwards',
        mountainUp: 'slideUp 1.5s 2.4s ease-in-out forwards',
        mountainOneUp: 'slideUp 1s 2.4s ease-in-out forwards',
      }
    },
    
    colors: {
      'black': '#1C1C1C',
      'white': '#BABABA',
      'navy': '#090C15',
      'beige': '#D1C8BD',
      'darker-beige': '#A59A8D',
      'darkest-beige': '#59534D',
      'socmed-hover': '#887E72',
      'transparent': 'transparent',
      'og-white': '#FFFFFF',
      'ftr-line': 'rgba(28, 28, 28, 0.75)',
      },
    
    backgroundImage: {
      'main': 'radial-gradient(50% 50.00% at 50% 50.00%, #CDD4D7 0%, #8B8F90 100%)',
      'splash': 'linear-gradient(180deg, #59534D 0%, #59534D 0.01%, #34312D 100%)',
      'footer': 'linear-gradient(180deg, #D1C8BD 0%, #756859 100%)',
    },

    fontFamily: {
      'besley': ['Besley', 'sans'],
      'syne': ['Syne', 'sans'],
    },

    screens: {
      'sm': '0px',
      'md': '741px',
      'lg': '938px',
      'xl': '1100px',
      '2xl': '1536px'
    }
  },
  plugins: [],
}

