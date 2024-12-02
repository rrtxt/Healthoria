/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sourceSans3: ['"Source Sans 3"', 'sans-serif']
      },
      colors: {
        white1: '#F5F5F5',
        white2: '#F1F1ED',
        blue1: '#CAE9FF',
        blue2: '#5FA8D3',
        blue3: '#1B4965',
        blue4: '#62B6CB',
        blue5: 'BEE9E8',
        yellow1: '#FFDA8B',
        yellow2: '#F4A731'
      }
    },
  },
  plugins: [],
}

