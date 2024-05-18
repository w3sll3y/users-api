import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [PrismaModule, UserModule, CompanyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
