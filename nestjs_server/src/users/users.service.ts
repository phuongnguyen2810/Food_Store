import { Injectable, BadRequestException, NotFoundException} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const {email, password, name , address, phoneNumber} = createUserDto
    const userExists = await this.prisma.user.findUnique({where :{ email } });
    if (userExists) {
      throw new BadRequestException('Email đã tồn tại');
    }
    const hashedPassword = await bcrypt.hash(password,10);

    return await this.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        address,
        phoneNumber
      },
      select: {
        id: true,
        email: true,
        name: true,
        createdAt: true,
      }
    })

  }

  async findAll() {
    return await this.prisma.user.findMany({
      select:{ id:true , email: true, name: true, role: true}
    })
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email }, select:{ id:true , email: true, name: true, role: true}
      
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
