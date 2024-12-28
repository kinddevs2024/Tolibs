/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'exo': ['Exo', 'sans-serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '50px',
        sm: '20px',
        lg: '40px',
        xl: '30px',
        '2xl': '60px',
      },
    },
    extend: {
      colors: {
        oq: '#ffffff',
        gren: "#ff9e16",
        qora: "#090a07",
        dakr: "#090a07",
        ornage: "#de9f00",
      }
    },
  },
  plugins: [],
})