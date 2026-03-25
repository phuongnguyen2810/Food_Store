/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    // Khởi tạo Pool kết nối từ biến môi trường
    const pool = new Pool({
      connectionString: process.env.DATABASE_URL as string
    });
    const adapter = new PrismaPg(pool);

    // Truyền adapter vào constructor của PrismaClient theo chuẩn v7
    super({ adapter });
  }

  onModuleInit() {
    this.$connect();
    console.log('--- DATABASE ĐÃ THÔNG SUỐT RỒI NHÉ ---');
  }
}
