/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        violeta:{
          100:'#9747FF',
        }
      }
    },
  },
  plugins: [],
}
