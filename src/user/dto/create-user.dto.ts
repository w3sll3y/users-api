import { IsEmail, IsNumber, IsString } from "class-validator";
import { User } from "../entities/user.entity";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto extends User {
  @ApiProperty({
    example: 'Frank Sinatra'
  })
  @IsString()
  nome: string;

  @ApiProperty({
    example: 'O-'
  })
  @IsString()
  tipo_sanguineo: string;

  @ApiProperty({
    example: '(11) 4002-8922'
  })
  @IsString()
  telefone_fixo: string;

  @ApiProperty({
    example: 'Lion'
  })
  @IsString()
  signo: string;

  @ApiProperty({
    example: 'Masculino'
  })
  @IsString()
  sexo: string;

  @ApiProperty({
    example: 'Rua 12'
  })
  @IsString()
  endereco: string;

  @ApiProperty({
    example: '12'
  })
  @IsNumber()
  numero: number;

  @ApiProperty({
    example: 'Aldeota'
  })
  @IsString()
  bairro: string;

  @ApiProperty({
    example: 'Ceará'
  })
  @IsString()
  estado: string;

  @ApiProperty({
    example: 'Fortaleza'
  })
  @IsString()
  cidade: string;

  @ApiProperty({
    example: '01234-567'
  })
  @IsString()
  cep: string;

  @ApiProperty({
    example: '20/10/1999'
  })
  @IsString()
  data_nasc: string;

  @ApiProperty({
    example: 'Abc@123'
  })
  @IsString()
  senha: string;

  @ApiProperty({
    example: 'Branco'
  })
  @IsString()
  cor: string;

  @ApiProperty({
    example: 'Nick Tesla'
  })
  @IsString()
  pai: string;

  @ApiProperty({
    example: 'Ada Lovelace'
  })
  @IsString()
  mae: string;

  @ApiProperty({
    example: 85
  })
  @IsNumber()
  peso: number;

  @ApiProperty({
    example: 'frnkstra@mail.com'
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: '(11) 4002-8922'
  })
  @IsString()
  celular: string;

  @ApiProperty({
    example: '012.345.678-90'
  })
  @IsString()
  cpf: string;

  @ApiProperty({
    example: '01.234.567-8'
  })
  @IsString()
  rg: string;

  @ApiProperty({
    example: '1,80'
  })
  @IsString()
  altura: string;

  @ApiProperty({
    example: 25
  })
  @IsNumber()
  idade: number;
}
