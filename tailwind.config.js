/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        catamaran: [`var(--font-catamaran)`, 'san-serif'],
        rubik: [`var(--font-rubik)`, 'san-serif'],
      }
    },
  },
  plugins: [],
}

