import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "linear-gradient(180.00deg, rgba(14, 19, 23, 0) -42.448%,rgb(14, 19, 23) 94.994%)",
        foreground: "var(--foreground)",
        white_rgb: "rgb(255, 255, 255);",
      },
      fontFamily:{
        balestya:['var(--font-balestya)'],
        abrilfatface:['var(--font-abrilfatface)'],
        gilroy:['var(--font-gilroy)']
      }
    },
  },
  plugins: [],
} satisfies Config;
