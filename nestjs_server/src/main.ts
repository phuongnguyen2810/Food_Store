import * as dotenv from 'dotenv'; // Thêm dòng này
dotenv.config(); // Và dòng này PHẢI ở trên cùng

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  await app.listen(3000);
  console.log(`--- SERVER CHẠY TẠI: http://localhost:3000 ---`);
}
bootstrap();