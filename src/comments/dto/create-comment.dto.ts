import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCommentDto {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;
  @IsNumber()
  stadium_id: number;
  @IsString()
  @IsNotEmpty()
  impression: string;
}
