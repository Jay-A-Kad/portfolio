/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest-riot': ['Protest Riot', 'sans-serif'],
        'poppins': ['Poppins', ' sans-serif'],
        'lora': ['Lora', 'serif'],
        'playfair': ['Playfair Display', ' serif'],
        'roboto-fat': ['Roboto Condensed', 'sans-serif'],
        'roboto-thin': ['Roboto Condensed', 'sans-serif'],
        'gamify': ['Pixelify Sans', 'sans-serif'],


      }
    },
  },
  plugins: [],
}

