/*
  Warnings:

  - You are about to drop the column `claimedAAt` on the `RewardHistory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RewardHistory" DROP COLUMN "claimedAAt",
ADD COLUMN     "claimedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
