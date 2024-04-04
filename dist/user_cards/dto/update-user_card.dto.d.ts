import { CreateUserCardDto } from './create-user_card.dto';
declare const UpdateUserCardDto_base: import("@nestjs/common").Type<Partial<CreateUserCardDto>>;
export declare class UpdateUserCardDto extends UpdateUserCardDto_base {
    user_id?: number;
    name?: string;
    phone?: string;
    number?: number;
    year?: number;
    month?: number;
    is_active?: boolean;
    is_main?: boolean;
}
export {};
