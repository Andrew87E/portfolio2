/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(21 128 61 / 1)",
        lightbg: "rgb(226 232 240 / 1)",
        darkbg: "rgb(31 41 55 / 1)",
        bgGradLight: "#131328",
        bgGradDark: "#01030D",
        bgGradGrey: "#323234",
      },
      fontFamily: {
        header: ["Roboto Mono", "monospace"],
        body: ["Space Grotesk", "sans-serif"],
        body2: ["Poppins", "sans-serif"],
        subheader: ["Rancho", "cursive"],
        extra: ["Lustria", "serif"],
      },
      animation: {
        "slide-in": "slide-in 1s ease-in-out",
        "slide-out": "slide-out 0.7s ease-in-out",
        "slide-up": "slide-up 0.7s ease-in-out",
        "slide-down": "slide-down 0.7s ease-in-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
