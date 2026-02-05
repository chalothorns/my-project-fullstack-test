import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        name: createUserDto.name,
        totalScore: 0,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      include: {
        playHistories: true,
        rewardHistories: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.user.findUnique({
      where: { id: id },
      include: {
        playHistories: true,
        rewardHistories: true,
      },
    });
  }

  async update(id: number, newScore: number, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: {
        name: updateUserDto.name,
        totalScore: {
          increment: newScore,
        },
      },
    });
  }

  async resetScore(id: number) {
    return this.prisma.$transaction(async (tx) => {
      await tx.playHistory.deleteMany({
        where: { userId: id },
      });

      await tx.rewardHistory.deleteMany({
        where: { userId: id },
      });

      return tx.user.update({
        where: { id },
        data: { totalScore: 0 },
      });
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where: { id: id },
    });
  }
}
