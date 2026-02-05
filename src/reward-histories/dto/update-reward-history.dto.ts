import { PartialType } from '@nestjs/mapped-types';
import { CreateRewardHistoryDto } from './create-reward-history.dto';

export class UpdateRewardHistoryDto extends PartialType(CreateRewardHistoryDto) {}
