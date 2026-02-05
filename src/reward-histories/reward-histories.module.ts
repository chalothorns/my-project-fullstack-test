import { Module } from '@nestjs/common';
import { RewardHistoriesService } from './reward-histories.service';
import { RewardHistoriesController } from './reward-histories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RewardHistoriesController],
  providers: [RewardHistoriesService],
})
export class RewardHistoriesModule {}
