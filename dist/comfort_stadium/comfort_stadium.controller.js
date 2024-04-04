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
exports.ComfortStadiumController = void 0;
const common_1 = require("@nestjs/common");
const comfort_stadium_service_1 = require("./comfort_stadium.service");
const create_comfort_stadium_dto_1 = require("./dto/create-comfort_stadium.dto");
const update_comfort_stadium_dto_1 = require("./dto/update-comfort_stadium.dto");
let ComfortStadiumController = class ComfortStadiumController {
    constructor(comfortStadiumService) {
        this.comfortStadiumService = comfortStadiumService;
    }
    create(createComfortStadiumDto) {
        return this.comfortStadiumService.create(createComfortStadiumDto);
    }
    findAll() {
        return this.comfortStadiumService.findAll();
    }
    findOne(id) {
        return this.comfortStadiumService.findOne(+id);
    }
    update(id, updateComfortStadiumDto) {
        return this.comfortStadiumService.update(+id, updateComfortStadiumDto);
    }
    remove(id) {
        return this.comfortStadiumService.remove(+id);
    }
};
exports.ComfortStadiumController = ComfortStadiumController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comfort_stadium_dto_1.CreateComfortStadiumDto]),
    __metadata("design:returntype", void 0)
], ComfortStadiumController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ComfortStadiumController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComfortStadiumController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_comfort_stadium_dto_1.UpdateComfortStadiumDto]),
    __metadata("design:returntype", void 0)
], ComfortStadiumController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ComfortStadiumController.prototype, "remove", null);
exports.ComfortStadiumController = ComfortStadiumController = __decorate([
    (0, common_1.Controller)('comfort-stadium'),
    __metadata("design:paramtypes", [comfort_stadium_service_1.ComfortStadiumService])
], ComfortStadiumController);
//# sourceMappingURL=comfort_stadium.controller.js.map