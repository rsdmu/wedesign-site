import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F6F3ED",
        ink: "#1C1C1C",
        muted: "#6B6B6B",
        accent: "#8B7E6A"
      },
      boxShadow: {
        card: "0 8px 30px rgba(0,0,0,0.06)",
        soft: "0 1px 1px rgba(0,0,0,0.04), 0 24px 48px rgba(0,0,0,0.08)"
      },
      borderRadius: {
        "xl2": "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
