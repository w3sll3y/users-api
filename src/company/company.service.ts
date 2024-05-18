import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class CompanyService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCompanyDto: CreateCompanyDto) {
    const data = {
      ...createCompanyDto,
      password: await bcrypt.hash(createCompanyDto.password, 10),
    };

    const createdCompany = await this.prisma.company.create({ data })

    return {
      ...createdCompany,
      password: undefined,
    };
  }

  async findByEmail(email: string) {
    return this.prisma.company.findUnique({
      where: { email },
    });
  }
}
