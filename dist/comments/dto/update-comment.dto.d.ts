import { CreateCommentDto } from './create-comment.dto';
declare const UpdateCommentDto_base: import("@nestjs/common").Type<Partial<CreateCommentDto>>;
export declare class UpdateCommentDto extends UpdateCommentDto_base {
    user_id?: number;
    stadium_id?: number;
    impression?: string;
}
export {};
