import type { QueryResolvers } from './../../../types.generated.js'
export const test: NonNullable<QueryResolvers['test']> = async (_parent, _arg, _ctx) => {
  return "Hello query"
}
