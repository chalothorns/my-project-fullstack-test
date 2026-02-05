import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

// origin: 'http://localhost:3000', // ใส่ URL ของ Next.js ของคุณ
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'