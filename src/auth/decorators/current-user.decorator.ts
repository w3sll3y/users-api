import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Company } from 'src/company/entities/company.entity';
import { AuthRequest } from '../models/AuthRequest';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): Company => {
    const request = context.switchToHttp().getRequest<AuthRequest>();

    return request.user;
  },
);