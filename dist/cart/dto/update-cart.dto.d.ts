import { CreateCartDto } from './create-cart.dto';
declare const UpdateCartDto_base: import("@nestjs/common").Type<Partial<CreateCartDto>>;
export declare class UpdateCartDto extends UpdateCartDto_base {
    user_id?: number;
    user_wallet_id?: number;
    st_times_id?: number;
    date?: Date;
    createdAt?: Date;
    time_for_clear?: Date;
    status_id?: number;
}
export {};
