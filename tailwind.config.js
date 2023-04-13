/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   './pages/**/*.{js,ts,jsx,tsx,,scss}', 
   './useComponents/**/*.{js,ts,jsx,tsx,scss}', 
   './usePieces/**/*.{js,ts,jsx,tsx,scss}', 
   './useCases/**/*.{js,ts,jsx,tsx,scss}',
   './layouts/**/*.{js,ts,jsx,tsx,scss}'
  ],
    theme: {
      container: {
        maxWidth: '300%',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        mono: ['Fira Code'],
      },
      extend: {
        spacing: {
          '128': '32rem',
          '144': '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        colors: {
          brand: {
            dark: '#0B1240',
            light: '#f9f9f9',
            accent: '#E5006A',
            primary: '#9C13BF',
            secondary: '#4F217F',
            soft: '#FF12FB'
          },
          transparent: 'transparent',
        },
        
      }
    },
  plugins: [],
}