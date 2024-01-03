/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        'greenstar': '#44bb89',
        'darkgreen': '#1f553e',
        'lightgreen': '#eef9f4',
      },
    },
  },
  plugins: [],
});