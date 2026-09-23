import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const docs = defineCollection({
  // Load every Markdown and MDX file inside the docs folder
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().optional(),
    video: z.string().optional(),
  }),
})

export const collections = {
  docs,
}
