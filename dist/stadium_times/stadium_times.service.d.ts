import { CreateStadiumTimeDto } from './dto/create-stadium_time.dto';
import { UpdateStadiumTimeDto } from './dto/update-stadium_time.dto';
import { StadiumTime } from './models/stadium_time.model';
export declare class StadiumTimesService {
    private stadiumTimeRepo;
    constructor(stadiumTimeRepo: typeof StadiumTime);
    create(createStadiumTimeDto: CreateStadiumTimeDto): Promise<StadiumTime>;
    findAll(): Promise<StadiumTime[]>;
    findOne(id: number): Promise<StadiumTime>;
    update(id: number, updateStadiumTimeDto: UpdateStadiumTimeDto): Promise<[affectedCount: number, affectedRows: StadiumTime[]]>;
    remove(id: number): Promise<number>;
}
