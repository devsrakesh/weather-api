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
exports.CrmAssignHistoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crm_assign_history_entity_1 = require("./entities/crm.assign-history.entity");
const create_crm_assign_history_dto_1 = require("./dto/create-crm.assign-history.dto");
const update_crm_assign_history_dto_1 = require("./dto/update-crm.assign-history.dto");
const crm_assign_history_service_1 = require("./crm.assign-history.service");
let CrmAssignHistoryController = class CrmAssignHistoryController {
    constructor(assignHistoryService) {
        this.assignHistoryService = assignHistoryService;
    }
    async register(reportData) {
        return await this.assignHistoryService.register(reportData);
    }
    async delete(id) {
        const deleted = await this.assignHistoryService.delete(id);
        if (!deleted)
            throw new common_1.NotFoundException('Assign history not found');
    }
    async edit(id, updateData) {
        const updated = await this.assignHistoryService.edit(id, updateData);
        if (!updated)
            throw new common_1.NotFoundException('Assign history not found');
    }
    async list(page, itemsPerPage) {
        return await this.assignHistoryService.list(page, itemsPerPage);
    }
    async profile(id) {
        const report = await this.assignHistoryService.profile(id);
        if (!report)
            throw new common_1.NotFoundException('Assign history not found');
        return report;
    }
};
exports.CrmAssignHistoryController = CrmAssignHistoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Creates a new assign history',
        type: crm_assign_history_entity_1.CrmAssignHistory,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crm_assign_history_dto_1.CreateCrmAssignHistoryDto]),
    __metadata("design:returntype", Promise)
], CrmAssignHistoryController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Deletes an assign history',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Assign history not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmAssignHistoryController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Updates an assign history',
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Assign history not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crm_assign_history_dto_1.UpdateCrmAssignHistoryDto]),
    __metadata("design:returntype", Promise)
], CrmAssignHistoryController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', type: Number, required: false }),
    (0, swagger_1.ApiQuery)({ name: 'itemsPerPage', type: Number, required: false }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Returns a list of assign history',
        type: [crm_assign_history_entity_1.CrmAssignHistory],
    }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('itemsPerPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CrmAssignHistoryController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', type: String }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Returns a single assign history',
        type: crm_assign_history_entity_1.CrmAssignHistory,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Assign history not found',
    }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmAssignHistoryController.prototype, "profile", null);
exports.CrmAssignHistoryController = CrmAssignHistoryController = __decorate([
    (0, swagger_1.ApiTags)('Assign History'),
    (0, common_1.Controller)('assign-history'),
    __metadata("design:paramtypes", [crm_assign_history_service_1.CrmAssignHistoryService])
], CrmAssignHistoryController);
//# sourceMappingURL=crm.assign-history.controller.js.map