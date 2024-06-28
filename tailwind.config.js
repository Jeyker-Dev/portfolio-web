/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: 
  [
    require("./src/js/mypreset.js")
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}