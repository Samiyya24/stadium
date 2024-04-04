import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginUserDto {
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;
}