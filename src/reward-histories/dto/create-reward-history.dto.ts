export class CreateRewardHistoryDto {
  id?: number;
  rewardType: string;
  claimedAt?: Date;
  userId: number;
}
