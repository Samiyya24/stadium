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
exports.StadiumsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const stadium_model_1 = require("./models/stadium.model");
let StadiumsService = class StadiumsService {
    constructor(stadiumRepo) {
        this.stadiumRepo = stadiumRepo;
    }
    create(createStadiumDto) {
        return this.stadiumRepo.create(createStadiumDto);
    }
    findAll() {
        return this.stadiumRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.stadiumRepo.findByPk(id);
    }
    update(id, updateStadiumDto) {
        return this.stadiumRepo.update(updateStadiumDto, {
            where: { id }, returning: true
        });
    }
    remove(id) {
        return this.stadiumRepo.destroy({ where: { id } });
    }
};
exports.StadiumsService = StadiumsService;
exports.StadiumsService = StadiumsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(stadium_model_1.Stadium)),
    __metadata("design:paramtypes", [Object])
], StadiumsService);
//# sourceMappingURL=stadiums.service.js.map