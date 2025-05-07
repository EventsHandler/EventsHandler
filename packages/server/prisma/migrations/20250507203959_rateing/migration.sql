-- CreateTable
CREATE TABLE "Rateing" (
    "id" TEXT NOT NULL,
    "fromId" TEXT NOT NULL,
    "toId" TEXT NOT NULL,

    CONSTRAINT "Rateing_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rateing" ADD CONSTRAINT "Rateing_fromId_fkey" FOREIGN KEY ("fromId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rateing" ADD CONSTRAINT "Rateing_toId_fkey" FOREIGN KEY ("toId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
