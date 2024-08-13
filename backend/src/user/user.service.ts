import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  async fetchuser(email: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          email,
        },
      });
      if (user) return user;
      else throw new HttpException('no user found', HttpStatus.I_AM_A_TEAPOT);
    } catch (error) {
      throw new HttpException(error, HttpStatus.I_AM_A_TEAPOT);
    }
  }
}
