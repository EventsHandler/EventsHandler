/*
  Warnings:

  - Made the column `eventId` on table `Announce` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Announce" DROP CONSTRAINT "Announce_eventId_fkey";

-- AlterTable
ALTER TABLE "Announce" ALTER COLUMN "eventId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Announce" ADD CONSTRAINT "Announce_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
