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
exports.CrmReportService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_report_entity_1 = require("./entities/crm.report.entity");
let CrmReportService = class CrmReportService {
    constructor(reportModel) {
        this.reportModel = reportModel;
    }
    async register(reportData) {
        try {
            const report = await this.reportModel.create(reportData);
            return report;
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async delete(reportData) {
        try {
            const query = { _id: reportData._id };
            const report = await this.reportModel.deleteOne(query);
            return {};
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async edit(reportData) {
        try {
            const filter = { _id: reportData._id };
            const update = { $set: reportData.updateData };
            const reportRes = await this.reportModel.updateOne(filter, update);
            return reportRes;
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async list(page = 1, limit = 10, sortBy = 'name', sortOrder = 1) {
        try {
            const sort = {};
            sort[sortBy] = sortOrder;
            const totalReports = await this.reportModel.countDocuments();
            const totalPages = Math.ceil(totalReports / limit);
            const reports = await this.reportModel
                .find({})
                .sort(sort)
                .skip((page - 1) * limit)
                .limit(limit);
            return {
                totalPages: totalPages,
                currentPage: page,
                totalReports: totalReports,
                reports: reports,
            };
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async profile(reportData) {
        try {
            const query = { _id: reportData._id };
            const report = await this.reportModel.findOne(query);
            return report;
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async paginatedList(req) {
        try {
            const itemsPerPage = req.body.itemsPerPage;
            const page = req.body.page;
            const skipCount = (page - 1) * itemsPerPage;
            const limitCount = itemsPerPage;
            const totalReport = await this.reportModel.find({}).countDocuments();
            const reportData = await this.reportModel
                .find({})
                .skip(skipCount)
                .limit(limitCount)
                .sort({ name: 1 });
            return { reportCount: totalReport, data: reportData };
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
};
exports.CrmReportService = CrmReportService;
exports.CrmReportService = CrmReportService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_report_entity_1.CrmReport.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CrmReportService);
//# sourceMappingURL=crm.report.service.js.map