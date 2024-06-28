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
exports.OrganizationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const organization_entity_1 = require("./entities/organization.entity");
let OrganizationService = class OrganizationService {
    constructor(organizationModel) {
        this.organizationModel = organizationModel;
    }
    async create(createOrganizationDto) {
        try {
            const organization = await this.organizationModel.create(createOrganizationDto);
            return organization;
        }
        catch (error) {
            throw error;
        }
    }
    async delete(id) {
        try {
            const org = await this.organizationModel.deleteOne({ _id: id });
            if (org.deletedCount === 1) {
                return { isDeleted: true, msg: 'Organization deleted successfully' };
            }
            else {
                throw new common_1.NotFoundException('Organization not found');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateOrganizationDto) {
        try {
            const org = await this.organizationModel.findByIdAndUpdate(id, updateOrganizationDto, { new: true });
            if (!org) {
                throw new common_1.NotFoundException('Organization not found');
            }
            return org;
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(page, itemsPerPage) {
        try {
            const skipCount = (page - 1) * itemsPerPage;
            const totalOrg = await this.organizationModel.countDocuments({});
            const orgData = await this.organizationModel
                .find({})
                .skip(skipCount)
                .limit(itemsPerPage)
                .sort({ name: 1 });
            return orgData;
        }
        catch (error) {
            throw error;
        }
    }
    async findById(id) {
        try {
            const org = await this.organizationModel.findById(id);
            if (!org) {
                throw new common_1.NotFoundException('Organization not found');
            }
            return org;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.OrganizationService = OrganizationService;
exports.OrganizationService = OrganizationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(organization_entity_1.Organization.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OrganizationService);
//# sourceMappingURL=organization.service.js.map