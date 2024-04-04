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
exports.UserWalletService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_wallet_model_1 = require("./models/user_wallet.model");
let UserWalletService = class UserWalletService {
    constructor(userWalletRepo) {
        this.userWalletRepo = userWalletRepo;
    }
    create(createUserWalletDto) {
        return this.userWalletRepo.create(createUserWalletDto);
    }
    findAll() {
        return this.userWalletRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.userWalletRepo.findByPk(id);
    }
    update(id, updateUserWalletDto) {
        return this.userWalletRepo.update(updateUserWalletDto, {
            where: { id },
            returning: true,
        });
    }
    remove(id) {
        return this.userWalletRepo.destroy({ where: { id } });
    }
};
exports.UserWalletService = UserWalletService;
exports.UserWalletService = UserWalletService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_wallet_model_1.UserWallet)),
    __metadata("design:paramtypes", [Object])
], UserWalletService);
//# sourceMappingURL=user_wallet.service.js.map