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
exports.CreateCrmAssignHistoryDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class CreateCrmAssignHistoryDto {
}
exports.CreateCrmAssignHistoryDto = CreateCrmAssignHistoryDto;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCrmAssignHistoryDto.prototype, "orgId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCrmAssignHistoryDto.prototype, "leadId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCrmAssignHistoryDto.prototype, "assignedTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_transformer_1.Transform)(({ value }) => value.toString()),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCrmAssignHistoryDto.prototype, "assignedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], CreateCrmAssignHistoryDto.prototype, "assignedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCrmAssignHistoryDto.prototype, "totalLead", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCrmAssignHistoryDto.prototype, "totalAssigned", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateCrmAssignHistoryDto.prototype, "totalExist", void 0);
//# sourceMappingURL=create-crm.assign-history.dto.js.map