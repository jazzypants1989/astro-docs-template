// @ts-check
import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import tailwind from "@astrojs/tailwind"

// https://astro.build/config
export default defineConfig({
  site: "https://inquisitive-centaur-fdce3f.netlify.app",
  integrations: [mdx(), tailwind()],
  server: {
    port: 3000,
  },
})
