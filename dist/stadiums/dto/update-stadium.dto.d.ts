import { CreateStadiumDto } from './create-stadium.dto';
declare const UpdateStadiumDto_base: import("@nestjs/common").Type<Partial<CreateStadiumDto>>;
export declare class UpdateStadiumDto extends UpdateStadiumDto_base {
    category_id?: number;
    owner_id?: number;
    contact_with?: string;
    name?: string;
    volume?: string;
    address?: string;
    region_id?: number;
    district_id?: number;
    location?: string;
    buildAt?: string;
    start_time?: string;
    end_time?: string;
}
export {};
