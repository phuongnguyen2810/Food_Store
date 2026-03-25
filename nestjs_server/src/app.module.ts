import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service'; // Import vào đây

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService], // Thêm PrismaService vào đây
})
export class AppModule {}
