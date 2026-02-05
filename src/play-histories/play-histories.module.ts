import { Module } from '@nestjs/common';
import { PlayHistoriesService } from './play-histories.service';
import { PlayHistoriesController } from './play-histories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [PlayHistoriesController],
  providers: [PlayHistoriesService],
  imports: [PrismaModule],
})
export class PlayHistoriesModule {}
