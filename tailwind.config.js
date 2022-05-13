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
        'gf-yellow': '#F3BD03',
        'gf-dark-yellow': '#C67600',
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
        'bounce-slow': 'bounce-slow 3s infinite'
      }
    },
  },
  plugins: [],
}
