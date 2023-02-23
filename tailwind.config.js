/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-50": "#07080D",
        "dark-150": "#262626",
        "dark-100": "#1d1d1d",
        "gray-50": "#d9d9d9",
        "gray-100": "#a1a2a6",
        "gray-150": "#77808c",
        blueGray: "#84a9bf",
        beige: "#f2a88d",
        oranBeige: "#f2a172",
        "yellow-150": "#f2cd13",
        "yellow-100": "#f2d194",
        "yellow-50": "#f2e0bd",
        "orange-50": "#f28b0c",
        "orange-100": "#f2600c",
        brown: "#59190b",
        mainRed: "#f2220f",
      },
      fontFamily: {
        aero: "Aero Matics",
        kgSummer: "KG Summer Sunshine",
        orangeJuice: "orange juice",
        sketch: "Sketch",
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
        "50%": "50%",
        16: "4rem",
      },
      backgroundPosition: {
        "p-100%": "-100%",
        "p200%": "205%",
      },
      animation:{
        
      }
    },
  },
  plugins: [],
};
