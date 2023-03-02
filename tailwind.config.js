/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        orange: "#f2a172",
        purple: "#4f1ca0",
        "bg-color": "#161616",
        white: "#f6f6f6",
        "white-opac": "#f6f6f640",
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
        contact: {
          "0%": { width: "30%" },
          "25%": { width: "70%" },
          "50%": { width: "50%" },
          "75%": { width: "20%" },
          "100%": { width: "30%" },
        },
        about: {
          "0%": { width: "30%" },
          "50%": { width: "60%" },
          "100%": { width: "30%" },
        },
        aboutl: {
          "0%": { width: "3.5em", backgroundColor: "#fff0" },
          "3.99%": { backgroundColor: "#fff0" },
          "4%": { width: "3.5em", left: "0", backgroundColor: "#f2a172" },
          "80%": { width: "0em" },
          "100%": { width: "0em", left: "-25%", backgroundColor: "#f2a172" },
        },
        aboutr: {
          "0%": { width: "3.5em", backgroundColor: "#fff0" },
          "3.99%": { backgroundColor: "#fff0" },
          "4%": { width: "3.5em", right: "0", backgroundColor: "#f2a172" },
          "80%": { width: "0em" },
          "100%": { width: "0em", right: "-25%", backgroundColor: "#f2a172" },
        },
      },
      animation: {
        slide: "slide 1500ms ease-in-out",
        contact: "contact 9500ms cubic-bezier(.18,1.6,.89,-0.56) infinite",
        about: "about 4s cubic-bezier(0,1.06,0,.73) infinite",
        aboutl: " aboutl 4s cubic-bezier(0,.79,.23,1.14) infinite",
        aboutr: " aboutr 4s cubic-bezier(0,.79,.23,1.14) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
});
