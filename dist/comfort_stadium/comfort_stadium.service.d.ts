import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
import { ComfortStadium } from './models/comfort_stadium.model';
export declare class ComfortStadiumService {
    private comfortStadiumRepo;
    constructor(comfortStadiumRepo: typeof ComfortStadium);
    create(createComfortStadiumDto: CreateComfortStadiumDto): Promise<ComfortStadium>;
    findAll(): Promise<ComfortStadium[]>;
    findOne(id: number): Promise<ComfortStadium>;
    update(id: number, updateComfortStadiumDto: UpdateComfortStadiumDto): Promise<[affectedCount: number, affectedRows: ComfortStadium[]]>;
    remove(id: number): Promise<number>;
}
