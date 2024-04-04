import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
export declare class DistrictService {
    private districtRepo;
    constructor(districtRepo: typeof District);
    create(createDistrictDto: CreateDistrictDto): Promise<District>;
    findAll(): Promise<District[]>;
    findOne(id: number): Promise<District>;
    update(id: number, updateDistrictDto: UpdateDistrictDto): Promise<[affectedCount: number, affectedRows: District[]]>;
    remove(id: number): Promise<number>;
}
