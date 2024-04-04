import { Model } from "sequelize-typescript";
interface IRegionCreateAttr {
    name: string;
}
export declare class Region extends Model<Region, IRegionCreateAttr> {
    id: number;
    name: string;
}
export {};
