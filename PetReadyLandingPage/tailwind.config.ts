import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   md: "768px",
    //   lg: "1024px",
    // },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // 'custom-light-blue': '#C4F2FF',
        "custom-hover-blue": "#C4F2FF",
      },
      keyframes: {
        pulseGradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
            backgroundSize: "200% 200%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            backgroundSize: "200% 200%",
          },
        },
        textColorChange: {
          "0%, 100%": { color: "white" }, // Text is white when background is purple/blue
          "50%": { color: "#37474F" }, // Text is black when background is pink
        },
        bounceAndPulse: {
          "0%, 100%": {
            transform: "translateY(0)", // Start and end position
          },
          "50%": {
            transform: "translateY(-25%)", // Bouncing up
          },
        },
      },
      animation: {
        combinedEffect:
          "bounceAndPulse 1.5s infinite, pulseGradient 3s ease-in-out infinite, textColorChange 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ["hover"],
    },
  },
}
export default config;
