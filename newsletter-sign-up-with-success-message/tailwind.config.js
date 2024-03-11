/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoregular: ["RobotoRegular", "sans-serif"],
        robotobold: ["RobotoBold", "sans-serif"],
      },
      colors: {
        'tomato': '#FF6257',
        'dark-slate-grey': '#242742',
        'charcoal-grey': '#36384E',
        'grey': '#9294A0',
        'wild-watermelon': '#FF527B',
        'burning-orange': '#FF6A3A',
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

