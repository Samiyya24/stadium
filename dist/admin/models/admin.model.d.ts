import { Model } from "sequelize-typescript";
interface IAdminCreateAttr {
    id: number;
    login: string;
    email: string;
    tgLink: string;
    photo: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: boolean;
    hashed_refresh_token: string;
}
export declare class Admin extends Model<Admin, IAdminCreateAttr> {
    id: number;
    login: string;
    email: string;
    tgLink: string;
    photo: string;
    hashed_password: string;
    is_active: boolean;
    is_creator: boolean;
    hashed_refresh_token: string;
}
export {};
