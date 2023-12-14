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
        primary: "#ff6363", // teal
        secondary: { 100: "#e2e2d5", 200: "#888883" }, // gray shades
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
        "slide-out": "slide-out 1s ease-in-out",
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(50%)" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
