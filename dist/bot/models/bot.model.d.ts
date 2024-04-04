import { Model } from 'sequelize-typescript';
interface IBotCreationAttr {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    status: boolean;
}
export declare class Bot extends Model<Bot, IBotCreationAttr> {
    user_id: number;
    username: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    status: boolean;
}
export {};
