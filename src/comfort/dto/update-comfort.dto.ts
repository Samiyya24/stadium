import { PartialType } from '@nestjs/swagger';
import { CreateComfortDto } from './create-comfort.dto';
import { IsOptional, IsString } from 'class-validator';

export class UpdateComfortDto extends PartialType(CreateComfortDto) {
  @IsOptional()
  @IsString()
  name?: string;
}
