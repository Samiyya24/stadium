import { IsDate, IsNumber } from 'class-validator';

export class CreateOrderDto {
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
  @IsNumber()
  status_id: number;
}
