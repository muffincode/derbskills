import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    }),
    questions: defineCollection({
        source: '**/*.yml',
        type: 'data',
        schema: z.object({
            label: z.string(),
            hint: z.string(),
            possibleAnswers: z.array(z.string()),
            answer: z.string(),
            explanation: z.string(),
            tags: z.array(z.string()),
            difficulty: z.string()
        })
    })
  }
})