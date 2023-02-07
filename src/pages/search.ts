import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

const docs = await getCollection("docs")

const removeHTMLTags = (str: string) => {
  return str.replace(/<[^>]*>?/gm, "")
}

const convertMarkdownToText = (str: string) => {
  return str.replace(/(\r\n|\n|\r)/gm, " ")
}

const docSearchObjects = docs.map((doc) => {
  return {
    title: doc.data.title,
    text: convertMarkdownToText(removeHTMLTags(doc.body)),
    url: `/docs/${doc.slug}`,
  }
})

export const get: APIRoute = async function get({ request, params }) {
  return {
    body: JSON.stringify(docSearchObjects),
  }
}
