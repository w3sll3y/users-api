import { Body, Controller, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @IsPublic()
  @Post()
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }
}
