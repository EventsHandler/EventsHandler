import type { MutationResolvers } from './../../../types.generated.js'
export const test: NonNullable<MutationResolvers['test']> = async (_parent, _arg, _ctx) => {
  return "Hello mutation"
}
