/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT(
  {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark: {
            100: "#f5f5f5",
            200: "#eeeeee",
            300: "#e0e0e0",
          },
          light: {
            100: "#bdbdbd",
            200: "#9e9e9e",
            300: "#757575",
          }
        },
        fontFamily: {
          primary: ["Cormorant SC", "sans-serif"],
          secondary: ["Tenali Ramakrishna", "sans-serif"],
        }
      },
    },
    plugins: [],
  }
)
