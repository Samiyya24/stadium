import { ComfortStadiumService } from './comfort_stadium.service';
import { CreateComfortStadiumDto } from './dto/create-comfort_stadium.dto';
import { UpdateComfortStadiumDto } from './dto/update-comfort_stadium.dto';
export declare class ComfortStadiumController {
    private readonly comfortStadiumService;
    constructor(comfortStadiumService: ComfortStadiumService);
    create(createComfortStadiumDto: CreateComfortStadiumDto): Promise<import("./models/comfort_stadium.model").ComfortStadium>;
    findAll(): Promise<import("./models/comfort_stadium.model").ComfortStadium[]>;
    findOne(id: string): Promise<import("./models/comfort_stadium.model").ComfortStadium>;
    update(id: string, updateComfortStadiumDto: UpdateComfortStadiumDto): Promise<[affectedCount: number, affectedRows: import("./models/comfort_stadium.model").ComfortStadium[]]>;
    remove(id: string): Promise<number>;
}
