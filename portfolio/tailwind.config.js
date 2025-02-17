/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
        whiteBorder: "#ffffff5d",
      },

      boxShadow: {
        black: "4px 4px 10px #000",
        white: "4px 4px 10px #fff",

        white_shadow: "-10px 1px 12px #fff",
        gray_shadow: "0 10px 12px -3px #334155",
      },
    },
  },

  darkMode: "selector",
  plugins: [],
};
