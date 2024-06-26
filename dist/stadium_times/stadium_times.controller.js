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
exports.StadiumTimesController = void 0;
const common_1 = require("@nestjs/common");
const stadium_times_service_1 = require("./stadium_times.service");
const create_stadium_time_dto_1 = require("./dto/create-stadium_time.dto");
const update_stadium_time_dto_1 = require("./dto/update-stadium_time.dto");
let StadiumTimesController = class StadiumTimesController {
    constructor(stadiumTimesService) {
        this.stadiumTimesService = stadiumTimesService;
    }
    create(createStadiumTimeDto) {
        return this.stadiumTimesService.create(createStadiumTimeDto);
    }
    findAll() {
        return this.stadiumTimesService.findAll();
    }
    findOne(id) {
        return this.stadiumTimesService.findOne(+id);
    }
    update(id, updateStadiumTimeDto) {
        return this.stadiumTimesService.update(+id, updateStadiumTimeDto);
    }
    remove(id) {
        return this.stadiumTimesService.remove(+id);
    }
};
exports.StadiumTimesController = StadiumTimesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stadium_time_dto_1.CreateStadiumTimeDto]),
    __metadata("design:returntype", void 0)
], StadiumTimesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StadiumTimesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StadiumTimesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stadium_time_dto_1.UpdateStadiumTimeDto]),
    __metadata("design:returntype", void 0)
], StadiumTimesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StadiumTimesController.prototype, "remove", null);
exports.StadiumTimesController = StadiumTimesController = __decorate([
    (0, common_1.Controller)('stadium-times'),
    __metadata("design:paramtypes", [stadium_times_service_1.StadiumTimesService])
], StadiumTimesController);
//# sourceMappingURL=stadium_times.controller.js.map