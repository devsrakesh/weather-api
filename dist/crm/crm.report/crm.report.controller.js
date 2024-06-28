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
exports.CrmReportController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const crm_report_entity_1 = require("./entities/crm.report.entity");
const crm_report_service_1 = require("./crm.report.service");
let CrmReportController = class CrmReportController {
    constructor(reportService) {
        this.reportService = reportService;
    }
    async register(reportData) {
        return this.reportService.register(reportData);
    }
    async delete(id) {
        return this.reportService.delete(id);
    }
    async edit(id, reportData) {
        return this.reportService.edit(id);
    }
    async profile(id) {
        return this.reportService.profile(id);
    }
    async list(page = 1, limit = 10, sortBy = 'name', sortOrder = 1) {
        return this.reportService.list(page, limit, sortBy, sortOrder);
    }
    async paginatedList(req) {
        return this.reportService.paginatedList(req);
    }
};
exports.CrmReportController = CrmReportController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new report' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Report created successfully',
        type: crm_report_entity_1.CrmReport,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "register", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a report by ID' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Report deleted successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a report by ID' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Report updated successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "edit", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get a report by ID' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Report retrieved successfully',
        type: crm_report_entity_1.CrmReport,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "profile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all reports' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Reports retrieved successfully',
        type: [crm_report_entity_1.CrmReport],
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, Number]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List paginated reports' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Paginated reports retrieved successfully',
        type: [crm_report_entity_1.CrmReport],
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    (0, common_1.Post)('paginated'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CrmReportController.prototype, "paginatedList", null);
exports.CrmReportController = CrmReportController = __decorate([
    (0, swagger_1.ApiTags)('Crm Report'),
    (0, common_1.Controller)('crm-report'),
    __metadata("design:paramtypes", [crm_report_service_1.CrmReportService])
], CrmReportController);
//# sourceMappingURL=crm.report.controller.js.map