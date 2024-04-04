import { Model } from "sequelize-typescript";
interface IDistrictCreateAttr {
    name: string;
    region_id: number;
}
export declare class District extends Model<District, IDistrictCreateAttr> {
    id: number;
    name: string;
    region_id: number;
}
export {};
