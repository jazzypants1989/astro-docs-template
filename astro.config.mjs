// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  site: "https://inquisitive-centaur-fdce3f.netlify.app",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Keep Astro's HTML-aware whitespace handling (the default before v7)
  // so spaces between inline elements are preserved.
  compressHTML: true,
  server: {
    port: 3000,
  },
})
