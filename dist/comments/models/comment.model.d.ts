import { Model } from "sequelize-typescript";
interface ICommentsAttr {
    user_id: number;
    stadium_id: number;
    impression: string;
}
export declare class Comment extends Model<Comment, ICommentsAttr> {
    id: number;
    user_id: number;
    stadium_id: number;
    impression: string;
}
export {};
