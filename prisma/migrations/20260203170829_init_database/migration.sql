-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "totalScore" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlayHistory" (
    "id" SERIAL NOT NULL,
    "ptsReceived" INTEGER NOT NULL,
    "playedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PlayHistory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RewardHistory" (
    "id" SERIAL NOT NULL,
    "rewardType" TEXT NOT NULL,
    "claimedAAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "RewardHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlayHistory" ADD CONSTRAINT "PlayHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RewardHistory" ADD CONSTRAINT "RewardHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
