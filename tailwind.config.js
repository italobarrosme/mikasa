/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   './pages/**/*.{js,ts,jsx,tsx,,scss}', 
   './components/**/*.{js,ts,jsx,tsx,scss}', 
   './useCases/**/*.{js,ts,jsx,tsx,scss}',
   './layouts/**/*.{js,ts,jsx,tsx,scss}'
  ],
    theme: {
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
            dark: '#0D0D0D',
            light: '#F2F2F2',
            primary: '#595959',
            secondary: '#A6A6A6',
            soft: '#D9D9D9'
          },
          transparent: 'transparent',
        },
        
      }
    },
  plugins: [],
}