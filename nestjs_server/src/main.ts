import * as dotenv from 'dotenv'; // Thêm dòng này
dotenv.config(); // Và dòng này PHẢI ở trên cùng

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); 
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Xóa bỏ các trường không được định nghĩa trong DTO
    forbidNonWhitelisted: true, // Báo lỗi nếu khách gửi trường lạ lên
    transform: true, // Tự động chuyển đổi kiểu dữ liệu (ví dụ chuỗi "1" sang số 1)
  }));


  await app.listen(3000);
  console.log(`--- SERVER CHẠY TẠI: http://localhost:3000 ---`);
}
bootstrap();