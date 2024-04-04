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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const admin_model_1 = require("./models/admin.model");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AdminService = class AdminService {
    constructor(adminRepo, jwtService) {
        this.adminRepo = adminRepo;
        this.jwtService = jwtService;
    }
    async getTokens(admin) {
        const payload = {
            id: admin.id,
            is_active: admin.is_active,
        };
        const [accessToken, refreshToken] = await Promise.all([
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
            access_token: accessToken,
            refreshToken: refreshToken,
        };
    }
    async login(loginAdminDto, res) {
        const { email, password } = loginAdminDto;
        const admin = await this.adminRepo.findOne({ where: { email } });
        if (!admin) {
            throw new common_1.BadRequestException('Admin not found');
        }
        if (!admin.is_active) {
            throw new common_1.BadRequestException('Admin not active');
        }
        const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
        if (!isMatchPass) {
            throw new common_1.BadRequestException('Password do not match');
        }
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedUser = await this.adminRepo.update({ hashed_refresh_token }, {
            where: { id: admin.id },
            returning: true,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'Admin logged in',
            admin: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    async logout(refreshToken, res) {
        const adminDate = await this.jwtService.verify(refreshToken, {
            secret: process.env.REFRESH_TOKEN_KEY,
        });
        if (!adminDate) {
            throw new common_1.ForbiddenException('User not verified');
        }
        const updatedUser = await this.adminRepo.update({ hashed_refresh_token: null }, {
            where: { id: adminDate.id },
            returning: true,
        });
        res.clearCookie('refresh_token');
        const response = {
            message: 'User logged out successfully',
            admin_refresh_token: updatedUser[1][0].hashed_refresh_token,
        };
        return response;
    }
    async refreshToken(adminId, refreshToken, res) {
        const decodedToken = await this.jwtService.decode(refreshToken);
        if (adminId !== decodedToken['id']) {
            throw new common_1.BadRequestException('Ruxsat etilmagan');
        }
        const admin = await this.adminRepo.findOne({ where: { id: adminId } });
        if (!admin || !admin.hashed_refresh_token) {
            throw new common_1.BadRequestException('admin not found');
        }
        const tokenMatch = await bcrypt.compare(refreshToken, admin.hashed_refresh_token);
        if (!tokenMatch) {
            throw new common_1.ForbiddenException('Forbidden');
        }
        const tokens = await this.getTokens(admin);
        const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
        const updatedUser = await this.adminRepo.update({ hashed_refresh_token }, {
            where: { id: admin.id },
            returning: true,
        });
        res.cookie('refresh_token', tokens.refreshToken, {
            maxAge: 15 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });
        const response = {
            message: 'User refreshed ',
            admin: updatedUser[1][0],
            tokens,
        };
        return response;
    }
    create(createAdminDto) {
        return this.adminRepo.create(createAdminDto);
    }
    findAll() {
        return this.adminRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.adminRepo.findByPk(id);
    }
    update(id, updateAdminDto) {
        return this.adminRepo.update(updateAdminDto, {
            where: { id },
            returning: true,
        });
    }
    remove(id) {
        return this.adminRepo.destroy({ where: { id } });
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(admin_model_1.Admin)),
    __metadata("design:paramtypes", [Object, jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map