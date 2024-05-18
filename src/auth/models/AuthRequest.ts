import { Request } from "express";
import { Company } from "src/company/entities/company.entity";

export interface AuthRequest extends Request {
  user: Company;
}