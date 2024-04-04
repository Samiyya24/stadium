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
exports.StadiumTimesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const stadium_time_model_1 = require("./models/stadium_time.model");
let StadiumTimesService = class StadiumTimesService {
    constructor(stadiumTimeRepo) {
        this.stadiumTimeRepo = stadiumTimeRepo;
    }
    create(createStadiumTimeDto) {
        return this.stadiumTimeRepo.create(createStadiumTimeDto);
    }
    findAll() {
        return this.stadiumTimeRepo.findAll({ include: { all: true } });
    }
    findOne(id) {
        return this.stadiumTimeRepo.findByPk(id);
    }
    update(id, updateStadiumTimeDto) {
        return this.stadiumTimeRepo.update(updateStadiumTimeDto, {
            where: { id },
            returning: true,
        });
    }
    remove(id) {
        return this.stadiumTimeRepo.destroy({ where: { id } });
    }
};
exports.StadiumTimesService = StadiumTimesService;
exports.StadiumTimesService = StadiumTimesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(stadium_time_model_1.StadiumTime)),
    __metadata("design:paramtypes", [Object])
], StadiumTimesService);
//# sourceMappingURL=stadium_times.service.js.map