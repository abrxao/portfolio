/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#f2a172",
        purple: "#4f1ca0",
        "bg-color": "#161616",
        white: "#f6f6f6",
      },
      fontFamily: {
        aero: "Aero Matics",
      },
      fontSize: {
        xsm: "0.65rem",
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
        "6xl": "3.7rem",
        "7xl": "4.2rem",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "250%": "250% 250%",
      },
      backgroundPosition: {
        "p-30%": "22% 30%",
      },
      screens: {
        xsm: "350px",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(-110%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        slide: "slide 1500ms ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
