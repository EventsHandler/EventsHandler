import { permission } from 'process'
import { memberPerms } from '../../../utils/permissions/member.js'
import type { MutationResolvers } from './../../../types.generated.js'
import { prisma } from '../../../../prisma.js'
export const defaultPermissions_remove: NonNullable<MutationResolvers['defaultPermissions_remove']> = async ( _parent,{ entityType, entityId, permission}, _ctx) => {
  const perm = memberPerms.perms.find(perm => perm.name === permission)
    if(!perm){
      throw new Error(`Nu s-a găsit permisiunea.`)
    }
    let entity
    if(entityType === "chat"){
      entity = await prisma.chat.findUnique({
        where: {
          id: entityId
        }
      })
    }else if(entityType === "group"){
      entity = await prisma.group.findUnique({
        where: {
          id: entityId
        }
      })
    }else if(entityType === "event"){
      entity = await prisma.event.findUnique({
        where: {
          id: entityId
        }
      })
    }
    if(!entity){
      throw new Error(`Nu s-a găsit entitatea.`)
    }
  
    if(entityType === "chat"){
      await prisma.chat.update({
        where: {
          id: entityId
        },
        data: {
          defaultPermissions: entity.defaultPermissions & ~perm.bit
        }
      })
    }
    else if(entityType === "group"){
      await prisma.group.update({
        where: {
          id: entityId
        },
        data: {
          defaultPermissions: entity.defaultPermissions & ~perm.bit
        }
      })
    }
    else if(entityType === "event"){
      await prisma.event.update({
        where: {
          id: entityId
        },
        data: {
          defaultPermissions: entity.defaultPermissions & ~perm.bit
        }
      })
    }
    return true
}
