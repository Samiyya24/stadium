import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    create(createAdminDto: CreateAdminDto): Promise<import("./models/admin.model").Admin>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        admin: import("./models/admin.model").Admin;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        admin_refresh_token: string;
    }>;
    refresh(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: import("./models/admin.model").Admin;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    findAll(): Promise<import("./models/admin.model").Admin[]>;
    findOne(id: string): Promise<import("./models/admin.model").Admin>;
    update(id: string, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: import("./models/admin.model").Admin[]]>;
    remove(id: string): Promise<number>;
}
