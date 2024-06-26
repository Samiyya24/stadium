import { PartialType } from '@nestjs/swagger';
import { CreateComfortStadiumDto } from './create-comfort_stadium.dto';

export class UpdateComfortStadiumDto extends PartialType(CreateComfortStadiumDto) {
  stadium_id?: number;
  comfort_id?: number;
}
