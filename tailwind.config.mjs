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
          yellow: "#FFD572",
        },
      },
      maxWidth: {
        card: "807px",
      },
      maxHeight: {
        card: "1397px",
      },
      transformOrigin: {
        0: "0%",
      },
      scale: {
        card: "calc(100% / 807px)",
      },
    },
  },
  plugins: [],
};
