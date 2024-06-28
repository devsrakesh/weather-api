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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const swagger_1 = require("@nestjs/swagger");
const role_entity_1 = require("./entity/role.entity");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
let RoleController = class RoleController {
    constructor(roleService) {
        this.roleService = roleService;
    }
    async create(createRoleDto) {
        const data = await this.roleService.create(createRoleDto);
        return { data, message: 'role created successfully' };
    }
    async findAll(pageSize, pageNumber, sortBy = 'createdAt', sortOrder = 'asc') {
        const roles = await this.roleService.findAll(pageSize, pageNumber, sortBy, sortOrder);
        if (!roles || roles.length === 0) {
            throw new common_1.NotFoundException('No roles found');
        }
        return { data: roles, message: 'retrieve all roles' };
    }
    async findOne(id) {
        const data = await this.roleService.findOne(id);
        return { data, message: 'retrieved role successfully ' };
    }
    async update(id, updateRoleDto) {
        const data = await this.roleService.update(id, updateRoleDto);
        return { data, message: 'updated role successfully' };
    }
    async remove(id) {
        await this.roleService.remove(id);
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Role created successfully',
        type: role_entity_1.Role,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation failed' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all roles with pagination and sorting' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', type: Number, required: true }),
    (0, swagger_1.ApiQuery)({ name: 'pageNumber', type: Number, required: true }),
    (0, swagger_1.ApiQuery)({
        name: 'sortBy',
        type: String,
        required: false,
        enum: ['createdAt', 'updatedAt'],
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sortOrder',
        type: String,
        required: false,
        enum: ['asc', 'desc'],
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of roles retrieved successfully',
        type: role_entity_1.Role,
        isArray: true,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No roles found' }),
    __param(0, (0, common_1.Query)('pageSize')),
    __param(1, (0, common_1.Query)('pageNumber')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Role retrieved successfully',
        type: role_entity_1.Role,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Role updated successfully',
        type: role_entity_1.Role,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Validation failed' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NO_CONTENT,
        description: 'Role deleted successfully',
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Role not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('roles'),
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map