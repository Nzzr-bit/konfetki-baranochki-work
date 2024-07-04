import type { Config } from "tailwindcss";

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
      padding: {
        button: "16px 134px",
      },
      colors: {
        mainRed: "#E52729",
        mainRedActive: "#B81516",
        ultraLightGrey: "#F4F4F4",
        black: "#1D1D1B",
        redActive: "#ED6869",
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
