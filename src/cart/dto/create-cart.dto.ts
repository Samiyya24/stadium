import { IsDate, IsNumber } from 'class-validator';

export class CreateCartDto {
  @IsNumber()
  user_id: number;
  @IsNumber()
  user_wallet_id: number;
  @IsNumber()
  st_times_id: number;
  @IsDate()
  date: Date;
  @IsDate()
  createdAt: Date;
  @IsDate()
  time_for_clear: Date;
  @IsNumber()
  status_id: number;
}
