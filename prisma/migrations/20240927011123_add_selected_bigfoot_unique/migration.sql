/*
  Warnings:

  - A unique constraint covering the columns `[selectedBigfootId]` on the table `Player` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Player" ADD COLUMN     "selectedBigfootId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Player_selectedBigfootId_key" ON "Player"("selectedBigfootId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_selectedBigfootId_fkey" FOREIGN KEY ("selectedBigfootId") REFERENCES "BigfootPlayer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
