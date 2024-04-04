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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
let UserGuard = class UserGuard {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const authorHeader = req.headers.authorization;
        if (!authorHeader) {
            throw new common_1.UnauthorizedException(' Unauthorized user');
        }
        const bearer = authorHeader.split('')[0];
        const token = authorHeader.split('')[1];
        if (bearer !== 'Bearer' || !token) {
            throw new common_1.UnauthorizedException(' Unauthorized user');
        }
        async function verify(token, jwtService) {
            let user;
            try {
                user = await jwtService.verify(token, {
                    secret: process.env.ACCESS_TOKEN_KEY,
                });
            }
            catch (error) {
                throw new common_1.BadRequestException(error.message);
            }
            if (!user) {
                throw new common_1.UnauthorizedException(' Unauthorized user');
            }
            if (!user.is_active) {
                throw new common_1.UnauthorizedException(' User is not active');
            }
            req.user = user;
            return true;
        }
        return verify(token, this.jwtService);
    }
};
exports.UserGuard = UserGuard;
exports.UserGuard = UserGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], UserGuard);
//# sourceMappingURL=user.guard.js.map