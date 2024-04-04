import { ComfortService } from './comfort.service';
import { CreateComfortDto } from './dto/create-comfort.dto';
import { UpdateComfortDto } from './dto/update-comfort.dto';
export declare class ComfortController {
    private readonly comfortService;
    constructor(comfortService: ComfortService);
    create(createComfortDto: CreateComfortDto): Promise<import("./models/comfort.models").Comfort>;
    findAll(): Promise<import("./models/comfort.models").Comfort[]>;
    findOne(id: string): Promise<import("./models/comfort.models").Comfort>;
    update(id: string, updateComfortDto: UpdateComfortDto): Promise<[affectedCount: number, affectedRows: import("./models/comfort.models").Comfort[]]>;
    remove(id: string): Promise<number>;
}
