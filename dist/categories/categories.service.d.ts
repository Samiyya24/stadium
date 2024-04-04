import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './models/category.model';
export declare class CategoriesService {
    private categoryRepo;
    constructor(categoryRepo: typeof Category);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<Category>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<[affectedCount: number, affectedRows: Category[]]>;
    remove(id: number): Promise<number>;
}
