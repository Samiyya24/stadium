import { DistrictService } from './district.service';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
export declare class DistrictController {
    private readonly districtService;
    constructor(districtService: DistrictService);
    create(createDistrictDto: CreateDistrictDto): Promise<import("./models/district.model").District>;
    findAll(): Promise<import("./models/district.model").District[]>;
    findOne(id: string): Promise<import("./models/district.model").District>;
    update(id: string, updateDistrictDto: UpdateDistrictDto): Promise<[affectedCount: number, affectedRows: import("./models/district.model").District[]]>;
    remove(id: string): Promise<number>;
}
