import { Model } from "sequelize-typescript";
interface ICategoriesCreateAttr {
    name: string;
    parent_id: number;
}
export declare class Category extends Model<Category, ICategoriesCreateAttr> {
    id: number;
    name: string;
    parent_id: number;
    category: Category;
}
export {};
