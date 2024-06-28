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
exports.CrmSourceService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_source_entity_1 = require("./entities/crm.source.entity");
let CrmSourceService = class CrmSourceService {
    constructor(sourceModel) {
        this.sourceModel = sourceModel;
    }
    async register(createSourceDto) {
        try {
            const { name, orgId } = createSourceDto;
            const filter = { name, orgId };
            const existingSource = await this.sourceModel.findOne(filter);
            if (!existingSource) {
                const newSource = new this.sourceModel(createSourceDto);
                const result = await newSource.save();
                return {
                    status: 1,
                    data: result,
                    msg: 'Action Inserted Successfully',
                };
            }
            else {
                return {
                    status: 0,
                    data: null,
                    msg: 'Already Exists',
                };
            }
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async delete(id, orgId) {
        try {
            const query = { _id: id, orgId };
            const deletionResult = await this.sourceModel.deleteOne(query);
            return {
                is_deleted: deletionResult.deletedCount === 1,
                statusCode: 200,
                msg: deletionResult.deletedCount === 1
                    ? 'Action deleted Successfully'
                    : 'Action Already Deleted',
            };
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async edit(id, orgId, updateSourceDto) {
        try {
            const filter = { _id: id, orgId };
            const update = { $set: updateSourceDto };
            const existingSource = await this.sourceModel.findOne({
                _id: { $ne: id },
                orgId,
                name: updateSourceDto.name,
            });
            if (existingSource) {
                return {
                    message: 'Action already Exists',
                    status: 0,
                    data: existingSource,
                };
            }
            else {
                const updateResult = await this.sourceModel.updateOne(filter, update);
                return {
                    message: 'Action Update Successful',
                    status: 1,
                    data: updateResult,
                };
            }
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async list() {
        try {
            const totalSource = await this.sourceModel.countDocuments();
            const sourceData = await this.sourceModel.find();
            return { sourceCount: totalSource, data: sourceData };
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async profile(id, orgId) {
        try {
            const query = { _id: id, orgId };
            const source = await this.sourceModel.findOne(query);
            return source;
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async getSourceOption(name) {
        try {
            const filter = { name: { $regex: name } };
            const sourceOptions = await this.sourceModel.find(filter).select('name');
            return { data: sourceOptions };
        }
        catch (error) {
        }
    }
    async reportByImport(filterData) {
        try {
        }
        catch (error) {
        }
    }
    async reportDaily(filterData) {
        try {
        }
        catch (error) {
        }
    }
};
exports.CrmSourceService = CrmSourceService;
exports.CrmSourceService = CrmSourceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_source_entity_1.CrmSource.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CrmSourceService);
//# sourceMappingURL=crm.source.service.js.map