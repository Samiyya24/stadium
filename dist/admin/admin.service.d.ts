import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './models/admin.model';
import { LoginAdminDto } from './dto/login-admin.dto';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class AdminService {
    private adminRepo;
    private readonly jwtService;
    constructor(adminRepo: typeof Admin, jwtService: JwtService);
    getTokens(admin: Admin): Promise<{
        access_token: string;
        refreshToken: string;
    }>;
    login(loginAdminDto: LoginAdminDto, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        admin_refresh_token: string;
    }>;
    refreshToken(adminId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        admin: Admin;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    create(createAdminDto: CreateAdminDto): Promise<Admin>;
    findAll(): Promise<Admin[]>;
    findOne(id: number): Promise<Admin>;
    update(id: number, updateAdminDto: UpdateAdminDto): Promise<[affectedCount: number, affectedRows: Admin[]]>;
    remove(id: number): Promise<number>;
}
