import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { Stadium } from './models/stadium.model';
export declare class StadiumsService {
    private stadiumRepo;
    constructor(stadiumRepo: typeof Stadium);
    create(createStadiumDto: CreateStadiumDto): Promise<Stadium>;
    findAll(): Promise<Stadium[]>;
    findOne(id: number): Promise<Stadium>;
    update(id: number, updateStadiumDto: UpdateStadiumDto): Promise<[affectedCount: number, affectedRows: Stadium[]]>;
    remove(id: number): Promise<number>;
}
