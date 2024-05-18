import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Company } from "../entities/company.entity";

export class CreateCompanyDto extends Company {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
