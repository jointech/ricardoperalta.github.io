// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import astroIcon from "astro-icon";
// import playformCompress from "@playform/compress"; // solo si lo instalaste

export default defineConfig({
  site: "https://ricardoperalta.github.io",
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      include: {
        mdi: ["*"],
        ri: ["*"],
        "simple-icons": ["*"],
      },
    }),
    // playformCompress({
    //   CSS: false,
    //   Image: false,
    //   Action: {
    //     Passed: async () => true,
    //   },
    // }),
    react(),
  ],
  output: "static", // GitHub Pages requiere archivos estáticos
});
