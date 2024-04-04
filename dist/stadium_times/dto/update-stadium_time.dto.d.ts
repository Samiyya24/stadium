import { CreateStadiumTimeDto } from './create-stadium_time.dto';
declare const UpdateStadiumTimeDto_base: import("@nestjs/common").Type<Partial<CreateStadiumTimeDto>>;
export declare class UpdateStadiumTimeDto extends UpdateStadiumTimeDto_base {
    stadium_id?: number;
    start_time?: number;
    end_time?: number;
    price?: number;
}
export {};
