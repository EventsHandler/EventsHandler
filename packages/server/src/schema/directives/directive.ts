import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { GraphQLSchema, defaultFieldResolver } from "graphql"

import { type User } from '../types.generated.js';
import { UserContext } from '../../types/context.js';

import { appPerms, type AppPermNames } from '../permissions/app.js';

function directive (
  directiveName: string,
) {
  const typeDirectiveArgumentMaps: Record<string, any> = {}
  return {
    directiveTypeDefs: `#graphql
    directive @${directiveName}(
      perm: PermsApp = administrator,
      error: String = "Nu ai acces sa faci aceasta actiune."
    ) on OBJECT | FIELD_DEFINITION

    enum PermsApp {
      ${appPerms.perms.map(p => p.name).join('\n')}
    }
    `,
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
            const { perm, error } = directive 
            if (perm) {
              const { resolve = defaultFieldResolver } = fieldConfig
              fieldConfig.resolve = function (source: any, args: any, context: UserContext, info: any) {
                if(!context.user) {
                  throw new Error("Nu ești logat.")
                }
                if (!appPerms.has(context.user, perm)) {
                  throw new Error(error)
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
 
export const { directiveTypeDefs, directiveTransformer } = directive('auth')
