import { StadiumsService } from './stadiums.service';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
export declare class StadiumsController {
    private readonly stadiumsService;
    constructor(stadiumsService: StadiumsService);
    create(createStadiumDto: CreateStadiumDto): Promise<import("./models/stadium.model").Stadium>;
    findAll(): Promise<import("./models/stadium.model").Stadium[]>;
    findOne(id: string): Promise<import("./models/stadium.model").Stadium>;
    update(id: string, updateStadiumDto: UpdateStadiumDto): Promise<[affectedCount: number, affectedRows: import("./models/stadium.model").Stadium[]]>;
    remove(id: string): Promise<number>;
}
