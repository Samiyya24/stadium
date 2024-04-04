import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
import { Comfort } from './models/comfort.models';
export declare class ComfortService {
    private comfortRepo;
    constructor(comfortRepo: typeof Comfort);
    create(createComfortDto: CreateComfortDto): Promise<Comfort>;
    findAll(): Promise<Comfort[]>;
    findOne(id: number): Promise<Comfort>;
    update(id: number, updateComfortDto: UpdateComfortDto): Promise<[affectedCount: number, affectedRows: Comfort[]]>;
    remove(id: number): Promise<number>;
}
