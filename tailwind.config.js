/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#f2a172",
        purple: "#4f1ca0",
      },
      fontFamily: {
        aero: "Aero Matics",
        "aero-display": "Aero Matics Display",
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
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      backgroundSize: {
        auto: "auto",
        cover: "cover",
        contain: "contain",
        "250%": "100% 250%",
      },
      screens: {
        xms: "350px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
