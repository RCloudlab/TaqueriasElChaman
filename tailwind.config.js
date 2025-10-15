// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      colors: {
        'aztec-gold': '#D4A373',
        'aztec-red': '#C0392B',
        'aztec-brown': '#8D6E63',
        'dark-obsidian': '#2C3E50',
      },
      fontFamily: {
        aztec: ['"Nombre de tu fuente azteca"', 'serif'],
      },
      backgroundImage: {
        'aztec-pattern': "url('./src/assets/images/aztec_pattern.jpg')",
      },
    },
  },
  plugins: [],
}