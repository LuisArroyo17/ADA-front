/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}","./src/**/*.{html,js}", "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        'richblack': '#0C161D',
        'rickblackClaro': '#12212B',
        'columbiablue': '#BFDBF7',
        'ligthgreen': '#96F08C',
        'greenhover': '#7BEC6F',
        'firered': '#D61F22',
        'redhover': '#B3191C',
        'lapislazuli': '#2F6690',
      },
    },
  },
  plugins: [],
}
