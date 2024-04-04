import { Model } from "sequelize-typescript";
interface IComfortCreateAttr {
    name: string;
}
export declare class Comfort extends Model<Comfort, IComfortCreateAttr> {
    id: number;
    name: string;
}
export {};
