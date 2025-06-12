/*
  Warnings:

  - A unique constraint covering the columns `[userId,chatId]` on the table `ChatMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,eventId]` on the table `EventMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,groupId]` on the table `GroupMember` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,chatId]` on the table `Message` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[ratedId,raterId]` on the table `Rating` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ChatMember_userId_chatId_key" ON "ChatMember"("userId", "chatId");

-- CreateIndex
CREATE UNIQUE INDEX "EventMember_userId_eventId_key" ON "EventMember"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "GroupMember_userId_groupId_key" ON "GroupMember"("userId", "groupId");

-- CreateIndex
CREATE UNIQUE INDEX "Message_userId_chatId_key" ON "Message"("userId", "chatId");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_ratedId_raterId_key" ON "Rating"("ratedId", "raterId");
