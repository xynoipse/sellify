/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Avenir', 'serif'],
    },
    extend: {
      colors: {
        primary: '#004486',
        secondary: '#45bcfa',
        danger: '#ff5555',
        warning: '#f7b732', 
        idle: '#b5b5b5',
      }
    },
  },
  plugins: [],
}
