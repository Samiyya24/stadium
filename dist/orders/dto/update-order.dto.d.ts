import { CreateOrderDto } from './create-order.dto';
declare const UpdateOrderDto_base: import("@nestjs/common").Type<Partial<CreateOrderDto>>;
export declare class UpdateOrderDto extends UpdateOrderDto_base {
    user_id?: number;
    user_wallet_id?: number;
    st_times_id?: number;
    date?: Date;
    createdAt?: Date;
    status_id?: number;
}
export {};
