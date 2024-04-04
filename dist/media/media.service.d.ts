import { CreateMediaDto } from './dto/create-media.dto';
import { UpdateMediaDto } from './dto/update-media.dto';
import { Media } from './models/media.model';
export declare class MediaService {
    private mediaRepo;
    constructor(mediaRepo: typeof Media);
    create(createMediaDto: CreateMediaDto): Promise<Media>;
    findAll(): Promise<Media[]>;
    findOne(id: number): Promise<Media>;
    update(id: number, updateMediaDto: UpdateMediaDto): Promise<[affectedCount: number, affectedRows: Media[]]>;
    remove(id: number): Promise<number>;
}
