import { Model } from "sequelize-typescript";
interface CartCreateAttr {
    user_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date: Date;
    createdAt: Date;
    time_for_clear: Date;
    status_id: number;
}
export declare class Cart extends Model<Cart, CartCreateAttr> {
    id: number;
    user_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date: Date;
    createdAt: Date;
    time_for_clear: Date;
    status_id: number;
}
export {};
