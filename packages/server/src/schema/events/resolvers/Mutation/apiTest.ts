import { chatCompletition } from '../../../../ai.js';
import { prisma } from '../../../../prisma.js';
import type { MutationResolvers } from './../../../types.generated.js'
export const apiTest: NonNullable<MutationResolvers['apiTest']> = async (_parent, { input }, _ctx) => {
  let categories: {id: string, name: string}[] | string[] = await prisma.category.findMany()
  categories = categories.map(c => c.name)
  const prompt = `
You are an AI model tasked with text classification. You will be provided with:

A user's message.
An array of predefined category names.
Your objective is to analyze the user's message and select the single category from the provided array that best represents the primary intent or topic of the message.

User's Message: ${input}
Available Categories: ${JSON.stringify(categories)}

Output:
Return only the single word corresponding to the name of the best matching category. Do not include any other words, explanations, or punctuation.
  `
  return chatCompletition(prompt)
}
