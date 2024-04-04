import { CreateAdminDto } from './create-admin.dto';
declare const UpdateAdminDto_base: import("@nestjs/common").Type<Partial<CreateAdminDto>>;
export declare class UpdateAdminDto extends UpdateAdminDto_base {
    login?: string;
    email?: string;
    password?: string;
    tgLink?: string;
    photo?: string;
    hashed_password?: string;
    is_active?: boolean;
    is_creator?: boolean;
    hashed_refresh_token?: string;
}
export {};
