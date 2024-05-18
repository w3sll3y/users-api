import { Injectable } from '@nestjs/common';
import { CompanyService } from 'src/company/company.service';
import * as bcrypt from 'bcrypt';
import { Company } from 'src/company/entities/company.entity';
import { CompanyPayload } from './models/CompanyPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly companyService: CompanyService,
    private readonly jwtService: JwtService
  ) { }

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

  login(user: Company): UserToken {
    const payload: CompanyPayload = {
      sub: user.id,
      email: user.email,
      name: user.name
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    }

  }
}
