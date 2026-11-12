import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080808",
        secondaryBg: "#111111",
        cardBg: "#191919",
        elevated: "#242424",
        accent: {
          primary: "#FF1728",      // Primary red
          secondary: "#D90016",    // Deep red
          deepred: "#D90016",      // Deep red
          coral: "#FF1728",
          hotpink: "#FF1728",
        },
        cinema: {
          dark: "#080808",
          surface: "#111111",
          card: "#191919",
          elevated: "#242424",
          border: "rgba(255, 255, 255, 0.12)",
          muted: "#B8B8B8",
          red: "#FF1728",
          deepred: "#D90016",
          orange: "#FF1728",
          coral: "#FF1728",
          violet: "#D90016",
          hotpink: "#FF1728",
          gold: "#F59E0B",
          green: "#22C55E",
          blue: "#3B82F6",
        },
        seat: {
          available: "#22C55E",
          selected: "#FF1728",      // Red for selected state
          booked: "#D90016",        // Deep red for booked
          unavailable: "#4B5563",
          locked: "#F59E0B",        // Warning amber for locked
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(255, 23, 40, 0.45)',
        'glow-red-lg': '0 0 35px -5px rgba(255, 23, 40, 0.6)',
        'glow-orange': '0 0 25px -5px rgba(255, 23, 40, 0.45)',
        'glow-coral': '0 0 25px -5px rgba(255, 23, 40, 0.45)',
        'glow-violet': '0 0 25px -5px rgba(217, 0, 22, 0.45)',
        'screen-glow': '0 25px 50px -12px rgba(255, 23, 40, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
export default config;
