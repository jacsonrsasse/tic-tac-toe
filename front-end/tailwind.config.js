/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8b939c",
        secondary: "#38405f",
        tertiary: "#59546c",
      },
    },
  },
  plugins: [],
};
