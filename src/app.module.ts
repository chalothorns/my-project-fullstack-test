import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
// import { PrismaService } from './prisma/prisma.service';
// import { UsersController } from './users/users.controller';
import { PrismaModule } from './prisma/prisma.module';
import { PlayHistoriesModule } from './play-histories/play-histories.module';
import { RewardHistoriesModule } from './reward-histories/reward-histories.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    PlayHistoriesModule,
    RewardHistoriesModule,
  ],
  // controllers: [UsersController],
  // providers: [PrismaService],
})
export class AppModule {}
