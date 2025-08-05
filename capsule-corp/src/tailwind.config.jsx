/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'saiyan-blue': '#3B4CCA',
        'saiyan-orange': '#FF9E00',
        'power-green': '#00FF00',
        'capsule-yellow': '#FFD700',
      },
      fontFamily: {
        saiyan: ['Orbitron', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
