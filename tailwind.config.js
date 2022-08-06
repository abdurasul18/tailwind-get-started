/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        'primary' : "#000fff"
      },
      fontSize : {
        'large' : "45px"
      }
    },
  },
  plugins: [],
}
