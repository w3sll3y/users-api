import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { CompanyModule } from 'src/company/company.module';

@Module({
  imports: [CompanyModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy]
})
export class AuthModule { }
