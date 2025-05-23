import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { GraphQLSchema, defaultFieldResolver } from "graphql"

import { type User } from '../types.generated.js';
import { UserContext } from '../../types/context.js';

import { permsApp } from '../permissions/app.js';
import { permsUser } from '../permissions/user.js';

function directive (
  directiveName: string,
) {
  const typeDirectiveArgumentMaps: Record<string, any> = {}
  return {
    directiveTypeDefs: `#graphql
    directive @${directiveName}(
      appPerm: PermsApp = Administrator,
      userPerm: PermsUser = None,
      type: userPermType = None,
    ) on OBJECT | FIELD_DEFINITION

    enum userPermType {
      Grup
      Chat
      Event
    }

    enum PermsApp {
      ${permsApp.map(p => p.name).join('\n')}
    }
 
    enum PermsUser {
      None
      ${permsUser.map(p => p.name).join('\n')}
    }`,
    directiveTransformer: (schema: GraphQLSchema) =>
      mapSchema(schema, {
        [MapperKind.TYPE]: type => {
          const directive = getDirective(schema, type, directiveName)?.[0]
          if (directive) {
            typeDirectiveArgumentMaps[type.name] =directive 
          }
          return undefined
        },
        [MapperKind.OBJECT_FIELD]: (fieldConfig: any, _fieldName: any, typeName: any) => {
          const directive =
            getDirective(schema, fieldConfig, directiveName)?.[0] ??
            typeDirectiveArgumentMaps[typeName]
          if (directive) {
            const { appPerm, userPerm, type } =directive 
            if (appPerm || userPerm || type) {
              const { resolve = defaultFieldResolver } = fieldConfig
              fieldConfig.resolve = function (source: any, args: any, context: UserContext, info: any) {
                const user = getUser(context.user)
                const rest = getRest(userPerm, type, args)
                if (!user.has(appPerm) || !rest) {
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
 
function getUser(user: User | null): { has(perm: string): boolean } {
  return {
    has: (perm: string) => {
      return false
    }
  }
}

function getRest(perm: string, type: string, args: any): boolean {
  if(perm !== "None" && type !== "None") {
    if(type == "Grup") {} // verify for grup
    if(type == "Event") {} // verify for event
    if(type == "Chat") {} // verify for chat
  }
  return false
}
 
export const { directiveTypeDefs, directiveTransformer } = directive('auth')
