import { Injectable } from '@nestjs/common';
import { CreatePlayHistoryDto } from './dto/create-play-history.dto';
import { UpdatePlayHistoryDto } from './dto/update-play-history.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlayHistoriesService {
  constructor(private prisma: PrismaService) {}

  async create(createPlayHistoryDto: CreatePlayHistoryDto) {
    const { userId, ptsReceived } = createPlayHistoryDto;

    return this.prisma.$transaction(async (tx) => {
      const history = await tx.playHistory.create({
        data: { ...createPlayHistoryDto },
      });

      await tx.user.update({
        where: { id: userId },
        data: { totalScore: { increment: ptsReceived } },
      });
      return history;
    });
  }

  findAll() {
    return this.prisma.playHistory.findMany();
  }

  findOne(id: number) {
    return this.prisma.playHistory.findUnique({
      where: { id: id },
    });
  }

  update(id: number, updatePlayHistoryDto: UpdatePlayHistoryDto) {
    return this.prisma.playHistory.update({
      where: { id: id },
      data: updatePlayHistoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.playHistory.delete({
      where: { id: id },
    });
  }
}
