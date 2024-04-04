import { Model } from 'sequelize-typescript';
interface ICStadiumCreateAttr {
    stadium_id: number;
    comfort_id: number;
}
export declare class ComfortStadium extends Model<ComfortStadium, ICStadiumCreateAttr> {
    id: number;
    stadium_id: number;
    comfort_id: number;
}
export {};
