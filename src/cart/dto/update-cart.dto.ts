import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';

export class UpdateCartDto extends PartialType(CreateCartDto) {
  user_id?: number;
  user_wallet_id?: number;
  st_times_id?: number;
  date?: Date;
  createdAt?: Date;
  time_for_clear?: Date;
  status_id?: number;
}
