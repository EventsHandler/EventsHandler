-- AlterTable
ALTER TABLE "Chat" ADD COLUMN     "defaultPermissions" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "defaultPermissions" BIGINT NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Group" ADD COLUMN     "defaultPermissions" BIGINT NOT NULL DEFAULT 0;
