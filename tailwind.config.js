/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      '3xs': '0.4rem',
      '2xs': '0.6rem',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
}
