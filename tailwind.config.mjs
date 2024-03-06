/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-souls": {
          pale: "#CECFD1",
          orange: "#FF7C3D",
          brown: "#251D1B",
          offwhite: "#EADDCC",
          gold: "#BB9834",
        },
      },
    },
  },
  plugins: [],
};
