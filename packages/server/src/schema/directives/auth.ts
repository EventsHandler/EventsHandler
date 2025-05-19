import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { GraphQLSchema, defaultFieldResolver } from "graphql"

export const ROLES: string[] = ["UNKNOWN", "USER", "ADMIN"]

import { type User } from '../types.generated.js';
import { UserContext } from '../../types/context.js';

function authDirective(
  directiveName: string,
  getUserFn: (user: User | null) => { hasRole: (role: string) => boolean }
) {
  const typeDirectiveArgumentMaps: Record<string, any> = {}
  return {
    authDirectiveTypeDefs: `#graphql
    directive @${directiveName}(
      requires: Role = ADMIN,
    ) on OBJECT | FIELD_DEFINITION
 
    enum Role {
      ${ROLES.join('\n')}
    }`,
    authDirectiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.TYPE]: type => {
          const authDirective = getDirective(schema, type, directiveName)?.[0]
          if (authDirective) {
            typeDirectiveArgumentMaps[type.name] = authDirective
          }
          return undefined
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig: any, _fieldName: any, typeName: any) => {
          const authDirective =
            getDirective(schema, fieldConfig, directiveName)?.[0] ??
            typeDirectiveArgumentMaps[typeName]
          if (authDirective) {
            const { requires } = authDirective
            if (requires) {
              const { resolve = defaultFieldResolver } = fieldConfig
              fieldConfig.resolve = function (source: any, args: any, context: UserContext, info: any) {
                console.log(args)
                const user = getUserFn(context.user)
                if (!user.hasRole(requires)) {
                  throw new Error('not authorized')
                }
                return resolve(source, args, context, info)
              }
              return fieldConfig
            }
          }
        }
      })
  }
}
 
function getUser(user: User | null) {
  const userRole = user ? user.username : "UNKNOWN"
  return {
    hasRole: (role: string) => {
      // let tokenIndex = ROLES.indexOf(userRole)
      // if(tokenIndex == -1) tokenIndex = 0
      // const roleIndex = ROLES.indexOf(role)
      // return roleIndex >= 0 && tokenIndex >= roleIndex
      if(user?.username == "test123") return true; else return false;
    }
  }
}
 
export const { authDirectiveTypeDefs, authDirectiveTransformer } = authDirective('auth', getUser)
