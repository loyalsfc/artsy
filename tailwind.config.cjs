/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grey: '#333333',
        blue: '#3341C1',
        'grey-light': '#888888',
        'grey-dark': '#292929',
        green: '#3EA03B',
        'grey-999': '#999EA5'
      },
      fontFamily:{
        clash: ['Clash Display', 'sans-serif'],    
        stix: ['STIX Two Text', 'serif'],
        bellefair: ['Bellefair', 'serif'],
        poppin: ['Poppins', 'sans-serif'],
        baskerville: ['Baskervville', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
        cardo: ['Cardo', 'serif']
      },
      boxShadow:{
        '3xl': '7.77035px 7.77035px 11.6555px rgba(0, 0, 0, 0.15)',
        '4xl': '4px 4px 64px rgba(0, 0, 0, 0.1)',
        '5xl': '2px 2px 32px rgba(0, 0, 0, 0.1)',
        '6xl': '4.68154px 4.68154px 7.02232px rgba(0, 0, 0, 0.15);'
      }
    },
  },
  plugins: [],
}
