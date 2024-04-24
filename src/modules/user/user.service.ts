import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  create(createUserDto: Partial<CreateUserDto>) {
    return this.prismaService.user.create({
      data: {
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        role: {
          create: [
            {
              role: 'ADMIN',
            },
            {
              role: 'CLT',
            },
            {
              role: 'GERENTE',
            },
          ],
        },
      },
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findFirst() {
    return this.prismaService.user.findFirst({
      include: {
        role: {
          where: {
            role:"ADMIN"
          }
        },
      },
      where: {
        password:"doritos123"
      }
    });
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: {
        id: id,
      },
      select: {
        name: true,
        password: true,
      },
    });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return this.prismaService.user.delete({
      where: {
        id: id,
      },
    });
  }
}
