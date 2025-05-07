import { client } from '../../../../openai.js';
import type { MutationResolvers } from './../../../types.generated.js'
export const apiTest: NonNullable<MutationResolvers['apiTest']> = async (_parent, { input }, _ctx) => {
  const completion: any = await client.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-4o",
  });
  return completion.choices[0].message.content
}
