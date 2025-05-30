-- CreateTable
CREATE TABLE "_events_groups_link" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_events_groups_link_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_events_chats_link" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_events_chats_link_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_groups_chats_link" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_groups_chats_link_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_events_groups_link_B_index" ON "_events_groups_link"("B");

-- CreateIndex
CREATE INDEX "_events_chats_link_B_index" ON "_events_chats_link"("B");

-- CreateIndex
CREATE INDEX "_groups_chats_link_B_index" ON "_groups_chats_link"("B");

-- AddForeignKey
ALTER TABLE "_events_groups_link" ADD CONSTRAINT "_events_groups_link_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_events_groups_link" ADD CONSTRAINT "_events_groups_link_B_fkey" FOREIGN KEY ("B") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_events_chats_link" ADD CONSTRAINT "_events_chats_link_A_fkey" FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_events_chats_link" ADD CONSTRAINT "_events_chats_link_B_fkey" FOREIGN KEY ("B") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groups_chats_link" ADD CONSTRAINT "_groups_chats_link_A_fkey" FOREIGN KEY ("A") REFERENCES "Chat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_groups_chats_link" ADD CONSTRAINT "_groups_chats_link_B_fkey" FOREIGN KEY ("B") REFERENCES "Group"("id") ON DELETE CASCADE ON UPDATE CASCADE;
