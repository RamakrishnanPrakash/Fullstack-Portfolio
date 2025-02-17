/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"], // Ensures Tailwind scans the right files
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    }, // Customize your theme here
  },
  plugins: [], // Add Tailwind plugins if needed
};
