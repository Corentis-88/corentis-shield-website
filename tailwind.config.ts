import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050A14",
        midnight: "#08111F",
        panel: "#0D1728",
        line: "rgba(148, 163, 184, 0.2)",
        cyanx: "#30D5FF",
        bluex: "#4F8CFF",
      },
      boxShadow: {
        glow: "0 0 60px rgba(48, 213, 255, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
