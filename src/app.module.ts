import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
// import { PrismaService } from './prisma/prisma.service';
// import { UsersController } from './users/users.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
  ],
  // controllers: [UsersController],
  // providers: [PrismaService],
})
export class AppModule {}
