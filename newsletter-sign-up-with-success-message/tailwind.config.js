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
        'custom': '7px 15px 20px rgba(255, 106, 58, 0.3)',
      }
    },
  },
  plugins: [],
}

