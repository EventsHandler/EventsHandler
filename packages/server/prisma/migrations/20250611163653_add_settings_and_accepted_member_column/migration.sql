-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "settings" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "ChatMember" ADD COLUMN     "accepted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "settings" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "EventMember" ADD COLUMN     "accepted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "settings" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "GroupMember" ADD COLUMN     "accepted" BOOLEAN NOT NULL DEFAULT false;
