/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey: '#333333'
      },
      fontFamily:{
        clash: ['Clash Display', 'sans-serif'],    
        stix: ['STIX Two Text', 'serif'],
        bellefair: ['Bellefair', 'serif'],
        poppin: ['Poppins', 'sans-serif'],
        baskerville: ['Baskervville', 'serif'],
        rubik: ['Rubik', 'sans-serif']
      },
      boxShadow:{
        '3xl': '7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}
