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
exports.CrmSourceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_crm_source_dto_1 = require("./dto/create-crm.source.dto");
const update_crm_source_dto_1 = require("./dto/update-crm.source.dto");
const crm_source_service_1 = require("./crm.source.service");
let CrmSourceController = class CrmSourceController {
    constructor(sourceService) {
        this.sourceService = sourceService;
    }
    async createSource(createSourceDto) {
        return await this.sourceService.register(createSourceDto);
    }
    async deleteSource(id, orgId) {
        return await this.sourceService.delete(id, orgId);
    }
    async updateSource(id, orgId, updateSourceDto) {
        return await this.sourceService.edit(id, orgId, updateSourceDto);
    }
    async getAllSources() {
        return await this.sourceService.list();
    }
    async getSourceById(id, orgId) {
        return await this.sourceService.profile(id, orgId);
    }
    async getSourceOptionsByName(name) {
        return await this.sourceService.getSourceOption(name);
    }
};
exports.CrmSourceController = CrmSourceController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new source' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Action Inserted Successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Already Exists' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crm_source_dto_1.CreateCrmSourceDto]),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "createSource", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a source by ID and organization ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Action deleted Successfully' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Action Already Deleted' }),
    (0, common_1.Delete)(':id/:orgId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('orgId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "deleteSource", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a source by ID and organization ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Action Update Successful' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Action already Exists' }),
    (0, common_1.Patch)(':id/:orgId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('orgId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_crm_source_dto_1.UpdateCrmSourceDto]),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "updateSource", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get all sources' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all sources' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "getAllSources", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get source by ID and organization ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return source data' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Source not found' }),
    (0, common_1.Get)(':id/:orgId'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('orgId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "getSourceById", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Search source options by name' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return source options' }),
    (0, common_1.Get)('options/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmSourceController.prototype, "getSourceOptionsByName", null);
exports.CrmSourceController = CrmSourceController = __decorate([
    (0, swagger_1.ApiTags)('source'),
    (0, common_1.Controller)('source'),
    __metadata("design:paramtypes", [crm_source_service_1.CrmSourceService])
], CrmSourceController);
//# sourceMappingURL=crm.source.controller.js.map