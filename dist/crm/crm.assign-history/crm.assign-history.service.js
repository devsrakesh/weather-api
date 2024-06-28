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
exports.CrmAssignHistoryService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_assign_history_entity_1 = require("./entities/crm.assign-history.entity");
let CrmAssignHistoryService = class CrmAssignHistoryService {
    constructor(assignHistoryModel) {
        this.assignHistoryModel = assignHistoryModel;
    }
    async register(reportData) {
        try {
            const report = await this.assignHistoryModel.create(reportData);
            return report;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to register assign history');
        }
    }
    async delete(id) {
        try {
            const query = { _id: id };
            const report = await this.assignHistoryModel.deleteOne(query);
            return report.deletedCount === 1;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete assign history');
        }
    }
    async edit(id, updateData) {
        try {
            const filter = { _id: id };
            const update = { $set: updateData };
            const reportRes = await this.assignHistoryModel.updateOne(filter, update);
            return reportRes;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to edit assign history');
        }
    }
    async list(page = 1, itemsPerPage = 10, sortBy = 'name', sortOrder = 'asc') {
        try {
            const skip = (page - 1) * itemsPerPage;
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
            const [totalReports, reportData] = await Promise.all([
                this.assignHistoryModel.countDocuments(),
                this.assignHistoryModel
                    .find()
                    .skip(skip)
                    .limit(itemsPerPage)
                    .sort(sortOptions)
                    .exec(),
            ]);
            return { totalReports, data: reportData };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to list assign history');
        }
    }
    async profile(id) {
        try {
            const query = { _id: id };
            const report = await this.assignHistoryModel.findOne(query);
            return report;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get assign history profile');
        }
    }
};
exports.CrmAssignHistoryService = CrmAssignHistoryService;
exports.CrmAssignHistoryService = CrmAssignHistoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_assign_history_entity_1.CrmAssignHistory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CrmAssignHistoryService);
//# sourceMappingURL=crm.assign-history.service.js.map