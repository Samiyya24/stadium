"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./models/user.model");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const uuid_1 = require("uuid");
const mail_service_1 = require("../mail/mail.service");
const sequelize_2 = require("sequelize");
let UsersService = class UsersService {
    constructor(userRepo, jwtService, mailService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    async getTokens(user) {
        const payload = {
            id: user.id,
            is_active: user.is_active,
            is_owner: user.is_owner,
        };
        const [accsessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: process.env.ACCESS_TOKEN_KEY,
                expiresIn: process.env.ACCESS_TOKEN_TIME,
            }),
            this.jwtService.signAsync(payload, {
                secret: process.env.REFRESH_TOKEN_KEY,
                expiresIn: process.env.REFRESH_TOKEN_TIME,
            }),
        ]);
        return {
            access_token: accsessToken,
            refreshToken: refreshToken,
        };
    }
    async registration(createUserDto, res) {
        const user = await this.userRepo.findOne({
            where: { email: createUserDto.email },
        });
        if (user) {
            throw new common_1.BadRequestException('Bunday foydalanuvchi mavjud');
        }
        if (createUserDto.password !== createUserDto.confirm_password) {
            throw new common_1.BadRequestException('Parollar mos emas');
        }
        const hashed_password = await bcrypt.hash(createUserDto.password, 7);
        const newUser = await this.userRepo.create({
            ...createUserDto,
            hashed_password,
        });
        const tokens = await this.getTokens(newUser);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const activation_link = (0, uuid_1.v4)();
        const updatedUser = await this.userRepo.update({ hashed_refresh_token, activation_link }, {
            where: { id: newUser.id },
            returning: true,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        try {
            await this.mailService.sendMail(updatedUser[1][0]);
        }
        catch (error) {
            console.log(error);
            throw new common_1.BadRequestException('Xatni yuborishda xatolik');
        }
        const response = {
            message: 'User registered',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async activate(link) {
        if (!link) {
            throw new common_1.BadRequestException('Activation link not found');
        }
        const updatedUser = await this.userRepo.update({ is_active: true }, {
            where: { activation_link: link, is_active: false },
            returning: true,
        });
        if (!updatedUser[1][0]) {
            throw new common_1.BadRequestException('User already activated');
        }
        const response = {
            message: 'User activated successfully',
            user: updatedUser[1][0].is_active,
        };
        return response;
    }
    async login(loginUserDto, res) {
        const { email, password } = loginUserDto;
        const user = await this.userRepo.findOne({ where: { email } });
        if (!user) {
            throw new common_1.BadRequestException('User not found');
        }
        if (!user.is_active) {
            throw new common_1.BadRequestException('User  is not activate');
        }
        const isMatchPass = await bcrypt.compare(password, user.hashed_password);
        if (!isMatchPass) {
            throw new common_1.BadRequestException('Password do not match');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedUser = await this.userRepo.update({ hashed_refresh_token }, {
            where: { id: user.id },
            returning: true,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User logged in',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const userDate = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!userDate) {
            throw new common_1.ForbiddenException('User not verified');
        }
        const updatedUser = await this.userRepo.update({ hashed_refresh_token: null }, {
            where: { id: userDate.id },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const response = {
            message: 'User logged out successfully',
            user_refresh_token: updatedUser[1][0].hashed_refresh_token,
        };
        return response;
    }
    async refreshToken(userId, refreshToken, res) {
        const decodedToken = await this.jwtService.decode(refreshToken);
        if (userId !== decodedToken['id']) {
            throw new common_1.BadRequestException('Ruxsat etilmagan');
        }
        const user = await this.userRepo.findOne({ where: { id: userId } });
        if (!user || !user.hashed_refresh_token) {
            throw new common_1.BadRequestException('user not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, user.hashed_refresh_token);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const tokens = await this.getTokens(user);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedUser = await this.userRepo.update({ hashed_refresh_token }, {
            where: { id: user.id },
            returning: true,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User refreshed ',
            user: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async create(createUserDto) {
        return this.userRepo.create(createUserDto);
    }
    async findUser(findUSerDto) {
        const where = {};
        if (findUSerDto.full_name) {
            where['full_name'] = {
                [sequelize_2.Op.like]: `%${findUSerDto.full_name}%`
            };
        }
        if (findUSerDto.email) {
            where['email'] = {
                [sequelize_2.Op.like]: `%${findUSerDto.email}%`,
            };
        }
        if (findUSerDto.phone) {
            where['phone'] = {
                [sequelize_2.Op.like]: `%${findUSerDto.phone}%`,
            };
        }
        if (findUSerDto.tg_link) {
            where['tg_link'] = {
                [sequelize_2.Op.like]: `%${findUSerDto.tg_link}%`,
            };
        }
        console.log(where);
        const users = await this.userRepo.findAll({ where });
        if (!users) {
            throw new common_1.BadRequestException('user not found');
        }
        return users;
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService,
        mail_service_1.MailService])
], UsersService);
//# sourceMappingURL=users.service.js.map