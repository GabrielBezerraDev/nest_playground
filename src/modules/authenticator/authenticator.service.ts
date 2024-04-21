import { Injectable } from '@nestjs/common';
import { CreateAuthenticatorDto } from './dto/create-authenticator.dto';
import { UpdateAuthenticatorDto } from './dto/update-authenticator.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthenticatorService {
  constructor(private prismaService: PrismaService) {}

  create(createAuthenticatorDto: CreateAuthenticatorDto) {
    return this.prismaService.authenticator.create({
      data: createAuthenticatorDto,
    });
  }

  findAll() {
    return `This action returns bostaaaaaaaa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authenticator`;
  }

  update(id: number, updateAuthenticatorDto: UpdateAuthenticatorDto) {
    return `This action updates a #${id} authenticator`;
  }

  remove(id: number) {
    return `This action removes a #${id} authenticator`;
  }
}
