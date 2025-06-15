import { prisma } from "../../prisma.js"

type Inbox = {
  send(userId: string, title: string, message: string): Promise<boolean>
}

async function sendInbox(userId: string, title: string, message: string): Promise<boolean> {
  await prisma.inbox.create({
    data: {
      userId, title, message
    }
  })
  return true
}

export const inbox: Inbox = {
  send: sendInbox
}