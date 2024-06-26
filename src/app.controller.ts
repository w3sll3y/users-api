import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { Company } from './company/entities/company.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('me')
  getMe(@CurrentUser() user: Company) {
    return user;
  }
}
