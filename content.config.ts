import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    tags: defineCollection({
      source: '2.tags/**.yml',
      type: 'data',
      schema: z.object({
        key: z.string(),
        fr: z.string(),
        icon: z.string()
      })
    }),
    authors: defineCollection({
      source: '3.authors/**.yml',
      type: 'data',
      schema: z.object({
        key: z.string(),
        name: z.string(),
        club: z.string()
      })
    }),
    questions: defineCollection({
      source: '1.questions/**.yml',
      type: 'data',
      schema: z.object({
        label: z.string(),
        hint: z.string(),
        possibleAnswers: z.array(z.string()),
        answer: z.string(),
        explanation: z.string(),
        tags: z.array(z.string()),
        difficulty: z.string(),
        aiGenerated: z.boolean(),
        reviewer: z.string(),
        author: z.string()
      })
    })
  }
})