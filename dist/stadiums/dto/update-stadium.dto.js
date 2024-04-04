"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStadiumDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_stadium_dto_1 = require("./create-stadium.dto");
class UpdateStadiumDto extends (0, swagger_1.PartialType)(create_stadium_dto_1.CreateStadiumDto) {
}
exports.UpdateStadiumDto = UpdateStadiumDto;
//# sourceMappingURL=update-stadium.dto.js.map