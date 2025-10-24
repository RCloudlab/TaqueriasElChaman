const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        gray:{
          900: '#1A1A1A',
          800: '#111111',
          850: '#8F9495',
          700: '#D9D9D9', //Es mucho mas claro
        },
        red:{
          900: '#C00F0C',
        }
      },
      fontFamily: {
        'sans': ['Jost', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}