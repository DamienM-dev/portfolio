import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#080705", 
        secondary: "#D9D9D9", 
        accent: "#702632", 
      },
    },
  },
  plugins: [],
} satisfies Config;