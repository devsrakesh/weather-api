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
exports.CrmLeadController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crm_lead_service_1 = require("./crm.lead.service");
let CrmLeadController = class CrmLeadController {
    constructor(leadService) {
        this.leadService = leadService;
    }
    async register(reqBody) {
        return await this.leadService.register(reqBody);
    }
    async deleteLeads(filter) {
        return await this.leadService.deleteLeads(filter);
    }
    async assignLeads(reqBody) {
        return await this.leadService.assignLeads(reqBody.filter, reqBody.updateData);
    }
    async editLead(reqBody) {
        return await this.leadService.editLead(reqBody);
    }
    async listLeads(reqBody) {
        return await this.leadService.listLeads(reqBody);
    }
    async getProfile(leadId, orgId) {
        return await this.leadService.getProfile(leadId, orgId);
    }
    async getListAggregate(filterData, paginationData) {
        return await this.leadService.getListAggregate(filterData, paginationData);
    }
    async getNameOptions(name) {
        return await this.leadService.getNameOptions(name);
    }
    async getLocationOptions(location) {
        return await this.leadService.getLocationOptions(location);
    }
    async getMobileOptions(contactNo) {
        return await this.leadService.getMobileOptions(contactNo);
    }
    async getAllNameOptions() {
        return await this.leadService.getAllNameOptions();
    }
    async leadActionReportByImportDate() {
        return await this.leadService.leadActionReportByImportDate();
    }
};
exports.CrmLeadController = CrmLeadController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Registers leads' }),
    (0, swagger_1.ApiBody)({ type: [Object], description: 'Array of lead objects' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)('delete'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Deletes leads' }),
    (0, swagger_1.ApiBody)({ type: Object, description: 'Filter object for deletion' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "deleteLeads", null);
__decorate([
    (0, common_1.Post)('assign-history'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Assign leads with history' }),
    (0, swagger_1.ApiBody)({
        type: Object,
        description: 'Object containing filter and updateData',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "assignLeads", null);
__decorate([
    (0, common_1.Put)('edit'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Edit lead' }),
    (0, swagger_1.ApiBody)({
        type: Object,
        description: 'Object containing _id, orgId, and updateData',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "editLead", null);
__decorate([
    (0, common_1.Post)('list'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List leads' }),
    (0, swagger_1.ApiBody)({
        type: Object,
        description: 'Object containing itemsPerPage, page, and filter',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "listLeads", null);
__decorate([
    (0, common_1.Get)('profile/:leadId/:orgId'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get lead profile by leadId and orgId',
    }),
    (0, swagger_1.ApiParam)({ name: 'leadId', type: String, description: 'Lead ID' }),
    (0, swagger_1.ApiParam)({ name: 'orgId', type: String, description: 'Organization ID' }),
    __param(0, (0, common_1.Param)('leadId')),
    __param(1, (0, common_1.Param)('orgId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Get)('aggregate'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List leads with aggregation' }),
    (0, swagger_1.ApiQuery)({ name: 'filterData', type: Object, description: 'Filter data' }),
    (0, swagger_1.ApiQuery)({
        name: 'paginationData',
        type: Object,
        description: 'Pagination data',
    }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getListAggregate", null);
__decorate([
    (0, common_1.Get)('name-options/:name'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get lead options by name' }),
    (0, swagger_1.ApiParam)({ name: 'name', type: String, description: 'Name' }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getNameOptions", null);
__decorate([
    (0, common_1.Get)('location-options/:location'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get lead options by location' }),
    (0, swagger_1.ApiParam)({ name: 'location', type: String, description: 'Location' }),
    __param(0, (0, common_1.Param)('location')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getLocationOptions", null);
__decorate([
    (0, common_1.Get)('mobile-options/:contactNo'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get lead options by contact number',
    }),
    (0, swagger_1.ApiParam)({ name: 'contactNo', type: String, description: 'Contact Number' }),
    __param(0, (0, common_1.Param)('contactNo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getMobileOptions", null);
__decorate([
    (0, common_1.Get)('all-name-options'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Get all lead name options' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "getAllNameOptions", null);
__decorate([
    (0, common_1.Get)('action-report'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lead action report by import date',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CrmLeadController.prototype, "leadActionReportByImportDate", null);
exports.CrmLeadController = CrmLeadController = __decorate([
    (0, swagger_1.ApiTags)('Lead'),
    (0, common_1.Controller)('lead'),
    __metadata("design:paramtypes", [crm_lead_service_1.CrmLeadService])
], CrmLeadController);
//# sourceMappingURL=crm.lead.controller.js.map