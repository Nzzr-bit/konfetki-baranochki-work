import type { Config } from "tailwindcss";
// Сделать для каждой кнопки свой паддинг!
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },

    fontSize: {
      xl: ["70px", "78px"],
      base: ["20px", "28px"],
      lg: ["48px", "64px"],
      s: ["18px", "28px"],
      xs: ["16px", "20px"],
      m: ["24px", "32px"],
      lg1: ["40px", "53px"],
      xxl: ["96px", "100px"],
      ml: ["30px", "28px"],
    },
    container: {
      screens: {
        sm: "100%",
        md: "688px",
        lg: "928px",
        xl: "1210px",
        "2xl": "1408px",
      },
      padding: "16px",
    },
    extend: {
      boxShadow: {
        xl: "inset 2px 2px 25px 2px rgba(0, 0, 0, 0.20)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      padding: {
        button: "16px 134px",
      },
      colors: {
        "main-red": "#E52729",
        "main-red-active": "#B81516",
        "ultra-light-grey": "#F4F4F4",
        black: "#1D1D1B",
        "red-active": "#ED6869",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
