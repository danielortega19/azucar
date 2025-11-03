/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 Scan all React files for Tailwind classes
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        gold: "#FFD700",
      },
    },
  },
  plugins: [],
};
