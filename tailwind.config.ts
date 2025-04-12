import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./utils//*.{js,ts,jsx,tsx,mdx}",
    "./components//*.{js,ts,jsx,tsx,mdx}",
    "./app//*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "text-teal-600",
        secondary: "#0f101e",
      },
    },
  },
  plugins: [],
};
export default config;
