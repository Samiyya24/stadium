import { StadiumTimesService } from './stadium_times.service';
import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
export declare class StadiumTimesController {
    private readonly stadiumTimesService;
    constructor(stadiumTimesService: StadiumTimesService);
    create(createStadiumTimeDto: CreateStadiumTimeDto): Promise<import("./models/stadium_time.model").StadiumTime>;
    findAll(): Promise<import("./models/stadium_time.model").StadiumTime[]>;
    findOne(id: string): Promise<import("./models/stadium_time.model").StadiumTime>;
    update(id: string, updateStadiumTimeDto: UpdateStadiumTimeDto): Promise<[affectedCount: number, affectedRows: import("./models/stadium_time.model").StadiumTime[]]>;
    remove(id: string): Promise<number>;
}
