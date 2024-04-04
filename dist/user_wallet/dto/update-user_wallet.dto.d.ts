import { CreateUserWalletDto } from './create-user_wallet.dto';
declare const UpdateUserWalletDto_base: import("@nestjs/common").Type<Partial<CreateUserWalletDto>>;
export declare class UpdateUserWalletDto extends UpdateUserWalletDto_base {
    user_id: number;
    wallet: number;
}
export {};
