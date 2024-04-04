import { Model } from "sequelize-typescript";
interface IUserWalletCreateAttr {
    user_id: number;
    wallet: number;
}
export declare class UserWallet extends Model<UserWallet, IUserWalletCreateAttr> {
    id: number;
    user_id: number;
    wallet: number;
}
export {};
