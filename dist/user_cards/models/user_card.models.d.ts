import { Model } from "sequelize-typescript";
interface IUserCardsCreateAttr {
    user_id: number;
    name: string;
    phone: string;
    number: number;
    year: number;
    month: number;
    is_active: boolean;
    is_main: boolean;
}
export declare class UserCard extends Model<UserCard, IUserCardsCreateAttr> {
    id: number;
    user_id: number;
    name: string;
    phone: string;
    number: number;
    year: number;
    month: number;
    is_active: boolean;
    is_main: boolean;
}
export {};
