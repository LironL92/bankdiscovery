import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EBF0",
          100: "#C5CCD9",
          200: "#8B99B3",
          300: "#51668D",
          400: "#2D3F5E",
          500: "#1A2A44",
          600: "#0A1628",
          700: "#070F1C",
          800: "#050A13",
          900: "#020509",
        },
        accent: {
          DEFAULT: "#00A86B",
          50: "#E6F7F0",
          100: "#B3E8D4",
          200: "#80D9B8",
          300: "#4DCA9C",
          400: "#26BE85",
          500: "#00A86B",
          600: "#008F5B",
          700: "#00764B",
          800: "#005D3B",
          900: "#00442B",
        },
        cream: {
          DEFAULT: "#FAFAF8",
          100: "#F5F5F0",
          200: "#EDEDEA",
        },
        gold: {
          DEFAULT: "#C9A84C",
          50: "#FBF7EC",
          100: "#F3EAC9",
          200: "#E5D594",
          300: "#D7C060",
          400: "#C9A84C",
          500: "#B89430",
          600: "#967824",
          700: "#745C1C",
          800: "#524113",
          900: "#30260B",
        },
        slate: {
          350: "#A3AEBE",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
