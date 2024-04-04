import { PartialType } from '@nestjs/swagger';
import { CreateCommentDto } from './create-comment.dto';

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  user_id?: number;
  stadium_id?: number;
  impression?: string;
}
