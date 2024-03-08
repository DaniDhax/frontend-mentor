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
    },
  },
  plugins: [],
}

