import { CreateMediaDto } from './create-media.dto';
declare const UpdateMediaDto_base: import("@nestjs/common").Type<Partial<CreateMediaDto>>;
export declare class UpdateMediaDto extends UpdateMediaDto_base {
    stadium_id?: number;
    photo?: string;
    description?: string;
}
export {};
