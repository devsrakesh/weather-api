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
exports.CrmActionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_action_entity_1 = require("./entities/crm.action.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let CrmActionService = class CrmActionService {
    constructor(actionModel, userModel) {
        this.actionModel = actionModel;
        this.userModel = userModel;
    }
    async createAction(createActionDto) {
        try {
            const filter = {
                $and: [
                    { name: createActionDto.name },
                    { orgId: createActionDto.orgId },
                ],
            };
            const checkExist = await this.actionModel.findOne(filter);
            if (!checkExist) {
                const action = new this.actionModel(createActionDto);
                return await action.save();
            }
            else {
                throw new common_1.ConflictException('Action Already Exists');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to create action');
        }
    }
    async deleteAction(id, orgId) {
        try {
            const query = { _id: id, orgId: orgId };
            const action = await this.actionModel.deleteOne(query);
            return action.deletedCount === 1;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete action');
        }
    }
    async updateAction(id, orgId, updateActionDto) {
        try {
            const filter = { $and: [{ _id: id }, { orgId: orgId }] };
            const update = { $set: updateActionDto };
            const options = { new: true };
            return await this.actionModel.findOneAndUpdate(filter, update, options);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to update action');
        }
    }
    async list(page, itemsPerPage, sortBy, sortOrder) {
        try {
            const skipCount = (page - 1) * itemsPerPage;
            const totalAction = await this.actionModel.countDocuments();
            const actionData = await this.actionModel
                .aggregate([
                { $match: {} },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'createdBy',
                        foreignField: '_id',
                        as: 'createdByInfo',
                    },
                },
                {
                    $unwind: {
                        path: '$createdByInfo',
                        preserveNullAndEmptyArrays: true,
                    },
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'updatedBy',
                        foreignField: '_id',
                        as: 'updatedByInfo',
                    },
                },
                {
                    $unwind: {
                        path: '$updatedByInfo',
                        preserveNullAndEmptyArrays: true,
                    },
                },
                {
                    $project: {
                        _id: 1,
                        orgId: 1,
                        name: 1,
                        color: 1,
                        percentage: 1,
                        status: 1,
                        createdBy: '$createdByInfo',
                        updatedBy: '$updatedByInfo',
                        dateCreated: 1,
                        dateUpdated: 1,
                    },
                },
            ])
                .skip(skipCount)
                .limit(itemsPerPage)
                .sort({ [sortBy]: sortOrder === 'asc' ? 1 : -1 });
            return { count: totalAction, data: actionData };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Internal Server Error', error.message);
        }
    }
    async getActionProfile(id, orgId) {
        try {
            const query = { _id: id, orgId: orgId };
            return await this.actionModel.findOne(query);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get action profile');
        }
    }
    async getActionOptionsByName(name) {
        try {
            const filter = { name: { $regex: name, $options: 'i' } };
            return await this.actionModel.find(filter).select('name');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get action options by name');
        }
    }
    async getAllActions(page = 1, limit = 10, sortBy = 'dateCreated', sortOrder = 'asc') {
        try {
            const skip = (page - 1) * limit;
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
            const [totalActions, actions] = await Promise.all([
                this.actionModel.countDocuments(),
                this.actionModel
                    .find()
                    .sort(sortOptions)
                    .skip(skip)
                    .limit(limit)
                    .exec(),
            ]);
            return { totalActions, actions };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get all actions');
        }
    }
};
exports.CrmActionService = CrmActionService;
exports.CrmActionService = CrmActionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_action_entity_1.CrmAction.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], CrmActionService);
//# sourceMappingURL=crm.action.service.js.map