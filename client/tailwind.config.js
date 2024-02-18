/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], daisyui: {
    // themes: ["dark"],
    themes: ["light"],
  },
  theme: {
    extend: {},

  },
  // plugins: [],
  plugins: [require("daisyui")],
}

