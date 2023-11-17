/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        '3xl' : '0px 130px 30px #fff'
      }
    },
  },
  plugins: [],
}
