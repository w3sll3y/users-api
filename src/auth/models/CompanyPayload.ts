export interface CompanyPayload {
  sub: number;
  email: string;
  name: string;
  iat?: number;
  exp?: number;
}