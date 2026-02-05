import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RewardHistoriesService } from './reward-histories.service';
import { CreateRewardHistoryDto } from './dto/create-reward-history.dto';
import { UpdateRewardHistoryDto } from './dto/update-reward-history.dto';

@Controller('reward-histories')
export class RewardHistoriesController {
  constructor(
    private readonly rewardHistoriesService: RewardHistoriesService,
  ) {}

  @Post()
  create(@Body() createRewardHistoryDto: CreateRewardHistoryDto) {
    return this.rewardHistoriesService.create(createRewardHistoryDto);
  }

  @Get()
  findAll() {
    return this.rewardHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rewardHistoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRewardHistoryDto: UpdateRewardHistoryDto,
  ) {
    return this.rewardHistoriesService.update(+id, updateRewardHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rewardHistoriesService.remove(+id);
  }
}
