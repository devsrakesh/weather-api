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
exports.CrmStatusService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_status_entity_1 = require("./entities/crm.status.entity");
let CrmStatusService = class CrmStatusService {
    constructor(statusModel) {
        this.statusModel = statusModel;
    }
    async create(createStatusDto) {
        const { name, orgId } = createStatusDto;
        const existingStatus = await this.statusModel.findOne({ name, orgId });
        if (existingStatus) {
            throw new common_1.NotFoundException('Status already exists');
        }
        const newStatus = new this.statusModel(createStatusDto);
        return newStatus.save();
    }
    async findAll() {
        return this.statusModel.find().exec();
    }
    async findOne(id) {
        const status = await this.statusModel.findById(id).exec();
        if (!status) {
            throw new common_1.NotFoundException('Status not found');
        }
        return status;
    }
    async update(id, updateStatusDto) {
        const updatedStatus = await this.statusModel.findByIdAndUpdate(id, updateStatusDto, { new: true });
        if (!updatedStatus) {
            throw new common_1.NotFoundException('Status not found');
        }
        return updatedStatus;
    }
    async remove(id) {
        const result = await this.statusModel.findByIdAndDelete(id).exec();
        if (result === null) {
            throw new common_1.NotFoundException('Status not found');
        }
    }
};
exports.CrmStatusService = CrmStatusService;
exports.CrmStatusService = CrmStatusService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_status_entity_1.CrmStatus.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CrmStatusService);
//# sourceMappingURL=crm.status.service.js.map