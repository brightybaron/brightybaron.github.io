/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/**/404.astro",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.2rem",
      },
    },
  },
  plugins: [],
};
