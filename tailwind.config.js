/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: 
  [
    require("./src/js/mypreset.js")
  ],
  theme: {
    extend: 
    {
      fontFamily:
      {
        "playfair": ["Playfair Display", "serif"],
        "source": ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}