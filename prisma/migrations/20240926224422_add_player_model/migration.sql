-- CreateTable
CREATE TABLE "Player" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "Player_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bigfoot" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "habitat" TEXT[],
    "description" TEXT NOT NULL,
    "attacksFile" TEXT NOT NULL,

    CONSTRAINT "Bigfoot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BigfootPlayer" (
    "id" TEXT NOT NULL,
    "playerId" TEXT NOT NULL,
    "bigfootId" TEXT NOT NULL,
    "level" INTEGER NOT NULL DEFAULT 1,
    "xp" INTEGER NOT NULL DEFAULT 0,
    "hp" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "luck" INTEGER NOT NULL,

    CONSTRAINT "BigfootPlayer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NPCOpponent" (
    "id" TEXT NOT NULL,
    "bigfootId" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "level" INTEGER NOT NULL,
    "hp" INTEGER NOT NULL,
    "defense" INTEGER NOT NULL,
    "luck" INTEGER NOT NULL,
    "isUnlocked" BOOLEAN NOT NULL DEFAULT false,
    "unlockedAt" TIMESTAMP(3),

    CONSTRAINT "NPCOpponent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Player_userId_key" ON "Player"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Bigfoot_name_key" ON "Bigfoot"("name");

-- CreateIndex
CREATE UNIQUE INDEX "BigfootPlayer_playerId_bigfootId_key" ON "BigfootPlayer"("playerId", "bigfootId");

-- AddForeignKey
ALTER TABLE "Player" ADD CONSTRAINT "Player_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BigfootPlayer" ADD CONSTRAINT "BigfootPlayer_playerId_fkey" FOREIGN KEY ("playerId") REFERENCES "Player"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BigfootPlayer" ADD CONSTRAINT "BigfootPlayer_bigfootId_fkey" FOREIGN KEY ("bigfootId") REFERENCES "Bigfoot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NPCOpponent" ADD CONSTRAINT "NPCOpponent_bigfootId_fkey" FOREIGN KEY ("bigfootId") REFERENCES "Bigfoot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
