import { Injectable } from '@nestjs/common';
import { CreateRewardHistoryDto } from './dto/create-reward-history.dto';
import { UpdateRewardHistoryDto } from './dto/update-reward-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RewardHistoriesService {
  constructor(private prisma: PrismaService) {}

  create(createRewardHistoryDto: CreateRewardHistoryDto) {
    return this.prisma.rewardHistory.create({
      data: createRewardHistoryDto,
    });
  }

  findAll() {
    return this.prisma.rewardHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.rewardHistory.findUnique({ where: { id: id } });
  }

  update(id: number, updateRewardHistoryDto: UpdateRewardHistoryDto) {
    return this.prisma.rewardHistory.update({
      where: { id: id },
      data: updateRewardHistoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.rewardHistory.delete({ where: { id: id } });
  }
}
