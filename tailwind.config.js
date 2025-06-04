/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
  'iphone14promax': '430px',
},
      fontFamily: {
      Bebas: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
