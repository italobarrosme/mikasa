/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
   './pages/**/*.{js,ts,jsx,tsx}', 
   './components/**/*.{js,ts,jsx,tsx}', 
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
          dark: '#2E1440',
          light: '#F2E30F',
          primary: '#F22EAE',
          secondary: '#401B59',
          ternary: '#F2A516'
        },
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
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