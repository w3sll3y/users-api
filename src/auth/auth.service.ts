import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateCompany(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
}
