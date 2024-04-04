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
exports.User = void 0;
const swagger_1 = require("@nestjs/swagger");
const sequelize_1 = require("sequelize");
const sequelize_2 = require("sequelize");
const sequelize_typescript_1 = require("sequelize-typescript");
let User = class User extends sequelize_typescript_1.Model {
};
exports.User = User;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'Foydalanuvchining ID unical raqamai',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sobir',
        description: 'Foydalanuvchining ismi',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "full_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+9981234567',
        description: 'Foydalanuvchining telefon raqami',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Sobir@email.com',
        description: 'Foydalanuvchining emaili',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'hashed_password',
        description: 'Foydalanuvchining hashed_password',
    }),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "hashed_password", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "tg_link", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "photo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "is_owner", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.BOOLEAN,
        defaultValue: false,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_2.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "hashed_refresh_token", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    }),
    __metadata("design:type", String)
], User.prototype, "activation_link", void 0);
exports.User = User = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'users' })
], User);
//# sourceMappingURL=user.model.js.map