/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9FAFDF",
        main: "#FAF0F0",
        secondary: "#D4BEE9",
        third: "#C9E4AE",
        highlight: "#9FE1DF",
      },
      dropShadow: {
        footer:
          "0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.06)",
      },
      borderRadius: {
        gestureSvg: "50% 50% 0% 0% / 40% 40% 0% 0%",
      },
      aspectRatio: {
        "project-card": "358/164",
      },
    },
  },
  plugins: [],
};
