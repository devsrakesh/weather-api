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
exports.CrmActionController = void 0;
const common_1 = require("@nestjs/common");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const crm_action_service_1 = require("./crm.action.service");
let CrmActionController = class CrmActionController {
    constructor(actionService) {
        this.actionService = actionService;
    }
    async createAction(createActionDto) {
        const data = await this.actionService.createAction(createActionDto);
        return { data, message: 'action created successfully ' };
    }
    async deleteAction(id, orgId) {
        return await this.actionService.deleteAction(id, orgId);
    }
    async updateAction(id, orgId, updateActionDto) {
        const data = await this.actionService.updateAction(id, orgId, updateActionDto);
        return { data, message: 'updated successfully' };
    }
    async getAllActions(page = 1, limit = 10, sortBy = 'date_created', sortOrder = 'asc') {
        const data = await this.actionService.getAllActions(page, limit, sortBy, sortOrder);
        return {
            count: data.totalActions,
            data: data.actions,
            message: 'retrieved successfully',
        };
    }
    async list(page = 1, itemsPerPage = 10, sortBy = 'name', sortOrder = 'asc') {
        const data = await this.actionService.list(page, itemsPerPage, sortBy, sortOrder);
        return { data: data.data, count: data.count, message: 'list all action' };
    }
};
exports.CrmActionController = CrmActionController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new action' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Action created successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Action already exists' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Failed to create action' }),
    (0, swagger_1.ApiBody)({ type: dto_1.CreateCrmActionDto }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateCrmActionDto]),
    __metadata("design:returntype", Promise)
], CrmActionController.prototype, "createAction", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete an action by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Action ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Action deleted successfully' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Failed to delete action' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Action not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('orgId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CrmActionController.prototype, "deleteAction", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update an action by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'Action ID' }),
    (0, swagger_1.ApiBody)({ type: dto_1.CreateCrmActionDto }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Action updated successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Action already exists' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Failed to update action' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('orgId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, dto_1.UpdateCrmActionDto]),
    __metadata("design:returntype", Promise)
], CrmActionController.prototype, "updateAction", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all actions' }),
    (0, swagger_1.ApiQuery)({
        name: 'page',
        description: 'Page number',
        required: false,
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Items per page',
        required: false,
        type: Number,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sortBy',
        description: 'Sort field',
        required: false,
        type: String,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sortOrder',
        description: 'Sort order (asc or desc)',
        required: false,
        enum: ['asc', 'desc'],
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Retrieved actions successfully' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Failed to get all actions' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], CrmActionController.prototype, "getAllActions", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get list of actions' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successfully retrieved list of actions',
    }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'itemsPerPage', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'sortBy', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'sortOrder', required: false, enum: ['asc', 'desc'] }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('itemsPerPage')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], CrmActionController.prototype, "list", null);
exports.CrmActionController = CrmActionController = __decorate([
    (0, swagger_1.ApiTags)('actions'),
    (0, common_1.Controller)('actions'),
    __metadata("design:paramtypes", [crm_action_service_1.CrmActionService])
], CrmActionController);
//# sourceMappingURL=crm.action.controller.js.map