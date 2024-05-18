import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly companyService: CompanyService) { }
  async validateCompany(email: string, password: string) {
    const user = await this.companyService.findByEmail(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined
        }
      }
    }
    throw new Error('Email or Password is incorrect.')
  }
}
