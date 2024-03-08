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
      },
    },
  },
  plugins: [],
}

