/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200p': '200%',
      },
      width: {
        '200p': '200%', 
      },
      height: {
        '200p': '200%', 
      }
    },
  },
  plugins: [],
}

