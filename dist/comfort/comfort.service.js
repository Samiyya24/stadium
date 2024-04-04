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
exports.ComfortService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comfort_models_1 = require("./models/comfort.models");
let ComfortService = class ComfortService {
    constructor(comfortRepo) {
        this.comfortRepo = comfortRepo;
    }
    async create(createComfortDto) {
        return this.comfortRepo.create(createComfortDto);
    }
    async findAll() {
        return this.comfortRepo.findAll({ include: { all: true } });
    }
    async findOne(id) {
        return this.comfortRepo.findByPk(id);
    }
    async update(id, updateComfortDto) {
        return this.comfortRepo.update(updateComfortDto, {
            where: { id },
            returning: true,
        });
    }
    async remove(id) {
        return this.comfortRepo.destroy({ where: { id } });
    }
};
exports.ComfortService = ComfortService;
exports.ComfortService = ComfortService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comfort_models_1.Comfort)),
    __metadata("design:paramtypes", [Object])
], ComfortService);
//# sourceMappingURL=comfort.service.js.map