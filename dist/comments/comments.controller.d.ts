import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    create(createCommentDto: CreateCommentDto): Promise<import("./models/comment.model").Comment>;
    findAll(): Promise<import("./models/comment.model").Comment[]>;
    findOne(id: string): Promise<import("./models/comment.model").Comment>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<[affectedCount: number, affectedRows: import("./models/comment.model").Comment[]]>;
    remove(id: string): Promise<number>;
}
