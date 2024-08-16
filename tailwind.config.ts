import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        success: "#28a745",
        warning: "#ffc107",
        danger: "#dc3545",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "24px",
      },
      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        full: "9999px",
      },
    },
  },
  plugins: [],
};
export default config;
