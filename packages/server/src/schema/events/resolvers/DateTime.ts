// import { GraphQLScalarType } from 'graphql'
// export const DateTime = new GraphQLScalarType({
//   name: 'DateTime',
//   description: 'DateTime description',
//   serialize: value => {
//     /* Implement logic to turn the returned value from resolvers to a value that can be sent to clients */
//   },
//   parseValue: value => {
//     /* Implement logic to parse input that was sent to the server as variables */
//   },
//   parseLiteral: ast => {
//     /* Implement logic to parse input that was sent to the server as literal values (string, number, or boolean) */
//   },
// })

import { DateTimeResolver } from "graphql-scalars";
export const  DateTime = DateTimeResolver