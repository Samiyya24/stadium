import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateStadiumDto {
  @IsNumber()
  category_id: number;

  @IsNumber()
  owner_id: number;

  @IsString()
  contact_with: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  volume: string;
  @IsString()
  @IsNotEmpty()
  address: string;
  @IsNumber()
  region_id: number;
  @IsNumber()
  district_id: number;
  @IsString()
  @IsNotEmpty()
  location: string;
  @IsString()
  buildAt: string;
  @IsString()
  @IsNotEmpty()
  start_time: string;
  @IsString()
  @IsNotEmpty()
  end_time: string;
}
