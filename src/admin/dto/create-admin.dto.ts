import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  login: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  @IsString()
  @IsNotEmpty()
  tgLink: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @IsString()
  @IsNotEmpty()
  hashed_password: string;

  @IsBoolean()
  is_active: boolean;

  @IsBoolean()
  is_creator: boolean;

  @IsString()
  @IsOptional()
  hashed_refresh_token: string;
}
