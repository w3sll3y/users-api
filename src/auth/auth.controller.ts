import { Body, Controller, HttpCode, HttpStatus, Post, Request, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthRequest } from './models/AuthRequest';
import { IsPublic } from './decorators/is-public.decorator';
import { CurrentUser } from './decorators/current-user.decorator';
import { Company } from 'src/company/entities/company.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @IsPublic()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: AuthRequest) {
    return this.authService.login(req.user);
  }

  @UseInterceptors(FileInterceptor('file'))
  @Post('upload')
  async uploadFile(@CurrentUser() user: Company, @UploadedFile() file) {
    return this.authService.uploadFile(file, user.id)
  }
}
