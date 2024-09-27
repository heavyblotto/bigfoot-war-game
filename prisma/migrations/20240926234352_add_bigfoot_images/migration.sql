-- AlterTable
ALTER TABLE "BigfootPlayer" ADD COLUMN     "imageUrl" TEXT;

-- AlterTable
ALTER TABLE "NPCOpponent" ADD COLUMN     "imageUrl" TEXT;

-- CreateTable
CREATE TABLE "GameSession" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "playerBigfootId" TEXT NOT NULL,
    "opponentId" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "xpGained" INTEGER NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endTime" TIMESTAMP(3),

    CONSTRAINT "GameSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_playerBigfootId_fkey" FOREIGN KEY ("playerBigfootId") REFERENCES "BigfootPlayer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameSession" ADD CONSTRAINT "GameSession_opponentId_fkey" FOREIGN KEY ("opponentId") REFERENCES "NPCOpponent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
