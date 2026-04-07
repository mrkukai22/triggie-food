/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
theme: {
  extend: {
    colors: {
      primary: "#FACC15",
      accent: "#FB923C",
      base: "#FFF7ED",
      text: "#1F2937",
      subtext: "#6B7280",
    },
  },
},
  plugins: [],
};