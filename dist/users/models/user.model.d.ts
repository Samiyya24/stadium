import { Model } from 'sequelize-typescript';
interface IUserCreationAttr {
    full_name: string;
    phone: string;
    email: string;
    hashed_password: string;
    tg_link: string;
    photo: string;
    is_owner: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
}
export declare class User extends Model<User, IUserCreationAttr> {
    id: number;
    full_name: string;
    phone: string;
    email: string;
    hashed_password: string;
    tg_link: string;
    photo: string;
    is_owner: boolean;
    is_active: boolean;
    hashed_refresh_token: string;
    activation_link: string;
}
export {};
