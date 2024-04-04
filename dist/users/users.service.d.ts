import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { JwtService } from '@nestjs/jwt';
import { MailService } from '../mail/mail.service';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { FindUserDto } from './dto/find-user.dto';
export declare class UsersService {
    private userRepo;
    private readonly jwtService;
    private readonly mailService;
    constructor(userRepo: typeof User, jwtService: JwtService, mailService: MailService);
    getTokens(user: User): Promise<{
        access_token: string;
        refreshToken: string;
    }>;
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    activate(link: string): Promise<{
        message: string;
        user: boolean;
    }>;
    login(loginUserDto: LoginUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    logout(refreshToken: string, res: Response): Promise<{
        message: string;
        user_refresh_token: string;
    }>;
    refreshToken(userId: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findUser(findUSerDto: FindUserDto): Promise<User[]>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
