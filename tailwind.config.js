module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'holiday': ['Holiday'],
        'poppins': ['Poppins', 'sans-serif']
      },
      colors: {
        'gf-yellow': '#F3BD03'
      }
    },
  },
  plugins: [],
}
