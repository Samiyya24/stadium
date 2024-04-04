import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserCardDto {
  @IsNumber()
  user_id: number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsString()
  phone: string;
  @IsNumber()
  number: number;
  @IsNumber()
  year: number;
  @IsNumber()
  month: number;
  @IsBoolean()
  is_active: boolean;
  @IsBoolean()
  is_main: boolean;
}
