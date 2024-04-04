import { Model } from "sequelize-typescript";
interface IMediaCreateAttr {
    stadium_id: number;
    photo: string;
    description: string;
}
export declare class Media extends Model<Media, IMediaCreateAttr> {
    id: number;
    photo: string;
    stadium_id: number;
    description: string;
}
export {};
