import { Model } from "sequelize-typescript";
interface IStadiumTimeAttr {
    stadium_id: number;
    start_time: number;
    end_time: number;
    price: number;
}
export declare class StadiumTime extends Model<StadiumTime, IStadiumTimeAttr> {
    id: number;
    stadium_id: number;
    start_time: number;
    end_time: number;
    price: number;
}
export {};
