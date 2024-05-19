import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) { }

  async create(createUserDto: CreateUserDto, id: number) {
    const data = {
      ...createUserDto,
      createdBy: id
    }
    await this.prisma.user.create({ data })
  }

  findAll(createdBy: number) {
    return this.prisma.user.findMany({
      where: {
        createdBy,
      }
    });
  }

  async findOne(id: any, userId: number) {
    const data = await this.prisma.user.findUnique({
      where: {
        id,
        createdBy: userId
      }
    });

    if (data === null) {
      throw new NotFoundException('User Not Found')
    }
    return data
  }

  async update(id: number, updateUserDto: UpdatePatchUserDTO, userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    })

    if (!userExists) {
      throw new NotFoundException('User Not Found')
    }

    if (userExists.createdBy !== userId) {
      throw new NotFoundException('User Not Found')
    }

    return await this.prisma.user.update({
      data: {
        ...updateUserDto
      },
      where: {
        id
      }
    })
  }

  async remove(id: number, userId: number) {
    const userExists = await this.prisma.user.findUnique({
      where: {
        id,
      }
    })

    if (!userExists) {
      throw new NotFoundException('User Not Found')
    }

    if (userExists.createdBy !== userId) {
      throw new NotFoundException('User Not Found')
    }

    return await this.prisma.user.delete({
      where: {
        id
      }
    })
  }
}
