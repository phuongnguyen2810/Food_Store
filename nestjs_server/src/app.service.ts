import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getAllProducts() {
    // Sau này em có thể thêm logic ở đây: ví dụ chỉ lấy món còn hàng
    return this.prisma.product.findMany();
  }
}
