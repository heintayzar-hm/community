/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          dark: {
            700: "#282828",
            800: "#404040",
            900: "#181818",
            950: "#121212",
          },
          light: {
            100: "#bdbdbd",
            200: "#9e9e9e",
            300: "#757575",
          },
          primary: "#2196f3"
        },
        fontFamily: {
          primary: ["Cormorant SC", "sans-serif"],
          secondary: ["Tenali Ramakrishna", "sans-serif"],
        }
      },
    },
    plugins: [
      require('tailwind-scrollbar')
    ],
  }
)
