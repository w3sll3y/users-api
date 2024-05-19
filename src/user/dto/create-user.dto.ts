import { IsEmail, IsNumber, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsString()
  nome: string;

  @IsString()
  tipo_sanguineo: string;

  @IsString()
  telefone_fixo: string;

  @IsString()
  signo: string;

  @IsString()
  sexo: string;

  @IsString()
  endereco: string;

  @IsNumber()
  numero: number;

  @IsString()
  bairro: string;

  @IsString()
  estado: string;

  @IsString()
  cidade: string;

  @IsString()
  cep: string;

  @IsString()
  data_nasc: string;

  @IsString()
  senha: string;

  @IsString()
  cor: string;

  @IsString()
  pai: string;

  @IsString()
  mae: string;

  @IsNumber()
  peso: number;

  @IsEmail()
  email: string;

  @IsString()
  celular: string;

  @IsString()
  cpf: string;

  @IsString()
  rg: string;

  @IsString()
  altura: string;

  @IsNumber()
  idade: number;
}
