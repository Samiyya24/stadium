import { Model } from "sequelize-typescript";
interface IStadiumCreateAttr {
    category_id: number;
    owner_id: number;
    contact_with: string;
    name: string;
    volume: string;
    address: string;
    region_id: number;
    district_id: number;
    location: string;
    buildAt: string;
    start_time: string;
    end_time: string;
}
export declare class Stadium extends Model<Stadium, IStadiumCreateAttr> {
    id: number;
    category_id: number;
    owner_id: number;
    contact_with: string;
    name: string;
    volume: string;
    address: string;
    region_id: number;
    district_id: number;
    location: string;
    buildAt: string;
    start_time: string;
    end_time: string;
}
export {};
