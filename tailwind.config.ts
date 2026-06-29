import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Steakhouse palette — charcoal, ember, bone, oxblood, brass
        char: {
          950: "#0a0807",
          900: "#12100e",
          800: "#1b1815",
          700: "#272320",
          600: "#3a342f",
        },
        ember: {
          DEFAULT: "#e1551f",
          400: "#f2752f",
          300: "#f79552",
        },
        oxblood: "#6b1d1d",
        brass: "#c9a14a",
        bone: "#f3ede2",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        kilo: "0.42em",
        mega: "0.28em",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.86" },
          "60%": { opacity: "0.94" },
          "75%": { opacity: "0.82" },
        },
        rise: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        flicker: "flicker 4s ease-in-out infinite",
        rise: "rise 0.8s cubic-bezier(0.16,1,0.3,1) both",
        marquee: "marquee 38s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
