const { heroui } = require("@heroui/theme");
import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(alert|button|ripple|spinner).js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        letterGlow: {
          "0%": { opacity: "0", textShadow: "0px 0px 1px rgba(255,255,255,0.1)" },
          "66%": { opacity: "1", textShadow: "0px 0px 20px rgba(255,255,255,0.9)" },
          "77%": { opacity: "1" },
          "100%": { opacity: "0.7", textShadow: "0px 0px 20px rgba(255,255,255,0)" },
        },
      },
      animation: {
        "letter-glow": "letterGlow 0.7s ease both",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui(), heroui()],
};
