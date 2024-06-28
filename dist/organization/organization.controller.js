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
exports.OrganizationController = void 0;
const common_1 = require("@nestjs/common");
const organization_service_1 = require("./organization.service");
const create_organization_dto_1 = require("./dto/create-organization.dto");
const update_organization_dto_1 = require("./dto/update-organization.dto");
const swagger_1 = require("@nestjs/swagger");
const organization_entity_1 = require("./entities/organization.entity");
let OrganizationController = class OrganizationController {
    constructor(organizationService) {
        this.organizationService = organizationService;
    }
    async create(createOrganizationDto) {
        const data = await this.organizationService.create(createOrganizationDto);
        return { data, message: 'successfully created ' };
    }
    async delete(id) {
        await this.organizationService.delete(id);
    }
    async update(id, updateOrganizationDto) {
        return this.organizationService.update(id, updateOrganizationDto);
    }
    async findAll(page, itemsPerPage) {
        const data = await this.organizationService.findAll(page, itemsPerPage);
        return { data, message: 'retrieved all organization' };
    }
    async findById(id) {
        const data = await this.organizationService.findById(id);
        return { data, message: 'get organization by id' };
    }
};
exports.OrganizationController = OrganizationController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiCreatedResponse)({
        description: 'The organization has been successfully created.',
        type: organization_entity_1.Organization,
    }),
    (0, swagger_1.ApiBody)({ type: create_organization_dto_1.CreateOrganizationDto }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_organization_dto_1.CreateOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'The organization has been successfully deleted.',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Organization not found' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "delete", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'The organization has been successfully updated.',
        type: organization_entity_1.Organization,
    }),
    (0, swagger_1.ApiBody)({ type: create_organization_dto_1.CreateOrganizationDto }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Organization not found' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_organization_dto_1.UpdateOrganizationDto]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "update", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false }),
    (0, swagger_1.ApiQuery)({ name: 'itemsPerPage', required: false }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of organizations retrieved successfully.',
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('itemsPerPage')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Organization retrieved successfully.',
        type: organization_entity_1.Organization,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Organization not found' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal Server Error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], OrganizationController.prototype, "findById", null);
exports.OrganizationController = OrganizationController = __decorate([
    (0, swagger_1.ApiTags)('organizations'),
    (0, common_1.Controller)('organizations'),
    __metadata("design:paramtypes", [organization_service_1.OrganizationService])
], OrganizationController);
//# sourceMappingURL=organization.controller.js.map