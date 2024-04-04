import { Model } from "sequelize-typescript";
interface IOrderCreateAttr {
    user_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date: Date;
    createdAt: Date;
    status_id: number;
}
export declare class Order extends Model<Order, IOrderCreateAttr> {
    id: number;
    user_id: number;
    user_wallet_id: number;
    st_times_id: number;
    date: Date;
    createdAt: Date;
    status_id: number;
}
export {};
