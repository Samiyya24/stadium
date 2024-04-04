import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './models/user.model';
import { LoginUserDto } from './dto/login-user.dto';
import { Response } from 'express';
import { FindUserDto } from './dto/find-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registration(createUserDto: CreateUserDto, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
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
    refresh(id: number, refreshToken: string, res: Response): Promise<{
        message: string;
        user: User;
        tokens: {
            access_token: string;
            refreshToken: string;
        };
    }>;
    findUser(findUserDto: FindUserDto, res: Response): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<User>;
    activate(link: string): Promise<{
        message: string;
        user: boolean;
    }>;
    findAll(): Promise<string>;
    findOne(id: string): Promise<string>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<string>;
    remove(id: string): Promise<string>;
}
