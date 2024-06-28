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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const role_entity_1 = require("./entity/role.entity");
let RoleService = class RoleService {
    constructor(roleModel) {
        this.roleModel = roleModel;
    }
    async create(createRoleDto) {
        const createdRole = new this.roleModel(createRoleDto);
        return createdRole.save();
    }
    async findAll(pageSize, pageNumber, sortBy = 'createdAt', sortOrder = 'asc') {
        try {
            const skip = (parseInt(pageNumber) - 1) * parseInt(pageSize);
            const limit = pageSize;
            const roles = await this.roleModel
                .aggregate([
                { $sort: { [sortBy]: sortOrder === 'asc' ? 1 : -1 } },
                { $skip: skip },
                { $limit: parseInt(limit) },
            ])
                .exec();
            if (!roles || roles.length === 0) {
                throw new common_1.NotFoundException('No roles found');
            }
            return roles;
        }
        catch (error) {
            throw new Error(`Failed to fetch roles: ${error.message}`);
        }
    }
    async findOne(id) {
        const role = await this.roleModel.findById(id);
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        return role;
    }
    async update(id, updateRoleDto) {
        const updatedRole = await this.roleModel.findByIdAndUpdate(id, updateRoleDto, { new: true });
        if (!updatedRole) {
            throw new common_1.NotFoundException('Role not found');
        }
        return updatedRole;
    }
    async remove(id) {
        const result = await this.roleModel.deleteOne({ _id: id });
        if (result.deletedCount === 0) {
            throw new common_1.NotFoundException('Role not found');
        }
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(role_entity_1.Role.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], RoleService);
//# sourceMappingURL=role.service.js.map