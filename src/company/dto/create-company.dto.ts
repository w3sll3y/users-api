import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Company } from "../entities/company.entity";

export class CreateCompanyDto extends Company {
  /** 
  * @example 'frnksntra@mail.com'
  */
  @IsEmail()
  email: string;

  /**
   * @example 'Frank Sinatra'
   */
  @IsString()
  name: string;

  /**
   * The password must be between 4 and 20 characters, with at least one uppercase letter, one lowercase letter and one special character
   * @example 'Abc@123'
   */
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;
}
