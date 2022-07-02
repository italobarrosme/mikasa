/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   './pages/**/*.{js,ts,jsx,tsx}', 
   './components/**/*.{js,ts,jsx,tsx}', 
   './useCases/**/*.{js,ts,jsx,tsx}',
   './layouts/**/*.{js,ts,jsx,tsx}'
  ],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        brand: {
          dark: '#0D0D0D',
          light: '#F2F2F2',
          primary: '#595959',
          secondary: '#A6A6A6',
          soft: '#D9D9D9'
        },
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
        }
      }
    },
  plugins: [],
}