import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        borderColor: "var(--border-color)",
        hoverBackground: "var(--hover-background)",
        inputBackground: "var(--input-background)",
        inputFocusBackground: "var(--input-focus-background)",
      },
      minWidth: {
        sm: "640px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
