/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "fluo-green": "rgb(47, 250, 145)",
      },
      boxShadow: {
        "bottom-fluo": "0 2px 0 rgb(47, 250, 145)",
        "bottom-light": "0 2px 0 #f7fafc",
      },
    },
  },
  plugins: [],
};
