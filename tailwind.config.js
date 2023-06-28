/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backdropBlur: {
        '3': '3px',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

