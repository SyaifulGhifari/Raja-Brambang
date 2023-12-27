/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'jumbo': '33rem',
      },
      boxShadow: {
        'inner-thick': 'inset 0 0 10px rgba(0, 0, 0, 0.5)',
        'outer-top': '0 -4px 10px -4px rgba(0, 0, 0, 0.5)',
        'outer-bottom': '0 4px 10px -4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}

