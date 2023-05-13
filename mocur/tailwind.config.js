/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shadow: "0px 4px 16px 0px rgba(0,0,0,0.12)",
      },
      colors: {
        "yellow-400": "#ffd600",
        "main-darker": "#0a3e2e",
        main: "#099270",
        "main-blend": "#11b969",
        "red-200": "#ffcaca",
        "red-400": "#ff2727",
        black: {
          100: "#f0f0f0",
          200: "#d5d5d5",
          300: "#b3b3b3",
          400: "#8c8c8c",
          500: "#757575",
          600: "#5c5c5c",
          700: "#414141",
          800: "#292929",
          DEFAULT: "#000000",
        },
      },
      backgroundImage: {
        background:
          "radial-gradient(54.97% 173.74% at 38.39% 61.76%, rgba(172, 182, 229, 0.6) 0%, rgba(116, 235, 213, 0.6) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
