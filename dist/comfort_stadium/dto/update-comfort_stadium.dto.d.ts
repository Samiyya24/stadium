import { CreateComfortStadiumDto } from './create-comfort_stadium.dto';
declare const UpdateComfortStadiumDto_base: import("@nestjs/common").Type<Partial<CreateComfortStadiumDto>>;
export declare class UpdateComfortStadiumDto extends UpdateComfortStadiumDto_base {
    stadium_id?: number;
    comfort_id?: number;
}
export {};
