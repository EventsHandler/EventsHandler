import type { DocumentNode } from 'graphql'
export const typeDefs = {
  kind: 'Document',
  definitions: [
    {
      name: { kind: 'Name', value: 'Query' },
      kind: 'ObjectTypeDefinition',
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'test' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_get_as_owner' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_get_as_member' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_get_members' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_get_groups' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_get_events' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_get_as_owner' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_get_as_member' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_get_members' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_get_chats' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_get_events' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
      ],
      directives: [],
      interfaces: [],
    },
    {
      name: { kind: 'Name', value: 'Mutation' },
      kind: 'ObjectTypeDefinition',
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'test' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_create' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'name' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_delete' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_join' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_kick' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_leave' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_accept' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_perm_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_member_perm_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_message_send' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'message' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Message' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_message_delete' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'messageId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Message' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_link_event' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_link_group' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_settings_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat_settings_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageChats' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_create' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'name' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_delete' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_join' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_kick' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_leave' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_accept' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_perm_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_member_perm_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_link_event' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_link_chat' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_settings_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group_settings_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageGroups' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_create' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'name' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'image' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Upload' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'description' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'address' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'dateStart' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'categoryId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'dateEnd' },
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'basedGroup' },
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'settings' },
              type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_delete' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'id' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_join' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_kick' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_leave' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_accept' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_perm_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_member_perm_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'userId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'permission' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Boolean' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_link_group' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'groupId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_link_chat' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'chatId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_settings_add' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event_settings_remove' },
          arguments: [
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'eventId' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
              directives: [],
            },
            {
              kind: 'InputValueDefinition',
              name: { kind: 'Name', value: 'setting' },
              type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
              directives: [],
            },
          ],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'auth' },
              arguments: [
                {
                  kind: 'Argument',
                  name: { kind: 'Name', value: 'perm' },
                  value: { kind: 'EnumValue', value: 'manageEvents' },
                },
              ],
            },
          ],
        },
      ],
      directives: [],
      interfaces: [],
    },
    { kind: 'ScalarTypeDefinition', name: { kind: 'Name', value: 'DateTime' }, directives: [] },
    { kind: 'ScalarTypeDefinition', name: { kind: 'Name', value: 'Upload' }, directives: [] },
    { kind: 'ScalarTypeDefinition', name: { kind: 'Name', value: 'BigInt' }, directives: [] },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'User' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'username' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'password' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'email' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'authToken' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'eventsCreated' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'events' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'groupsCreated' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'groups' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chatsCreated' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chats' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'messages' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Message' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ratingsGiven' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Rating' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ratingsReceived' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Rating' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'comments' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Comment' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'appPermissions' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'inbox' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Inbox' } } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Event' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'image' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'description' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'address' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'dateStart' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'dateEnd' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'settings' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ownerId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'owner' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'members' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'EventMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'announces' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Announce' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'comments' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Comment' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'categoryId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'category' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Category' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedGroups' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedChats' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Group' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'settings' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ownerId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'owner' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'members' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'GroupMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedEvents' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedChats' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Chat' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'settings' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ownerId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'owner' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'members' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ChatMember' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'messages' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Message' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedEvents' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'linkedGroups' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'EventMember' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'eventId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'permissions' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'GroupMember' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'groupId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'group' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Group' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'permissions' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'ChatMember' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chatId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'permissions' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'BigInt' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Message' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'message' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chatId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'chat' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Chat' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Rating' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'ratedId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'raterId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'rated' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'rater' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'rate' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Announce' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'description' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'createdAt' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'DateTime' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'eventId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Category' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'name' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'events' },
          arguments: [],
          type: {
            kind: 'ListType',
            type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } } },
          },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Comment' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'eventId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'event' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Event' } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'comment' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
      ],
    },
    {
      kind: 'ObjectTypeDefinition',
      name: { kind: 'Name', value: 'Inbox' },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'id' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'title' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'message' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'userId' },
          arguments: [],
          type: { kind: 'NonNullType', type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } } },
          directives: [],
        },
        {
          kind: 'FieldDefinition',
          name: { kind: 'Name', value: 'user' },
          arguments: [],
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'User' } },
          directives: [],
        },
      ],
    },
    {
      kind: 'SchemaDefinition',
      operationTypes: [
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Query' } },
          operation: 'query',
        },
        {
          kind: 'OperationTypeDefinition',
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Mutation' } },
          operation: 'mutation',
        },
      ],
    },
  ],
} as unknown as DocumentNode
