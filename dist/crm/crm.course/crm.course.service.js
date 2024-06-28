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
exports.CrmCourseService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const crm_course_entity_1 = require("./entities/crm.course.entity");
let CrmCourseService = class CrmCourseService {
    constructor(courseModel) {
        this.courseModel = courseModel;
    }
    async register(courseData) {
        try {
            const filter = {
                $and: [{ name: courseData.name }, { orgId: courseData.orgId }],
            };
            const checkExist = await this.courseModel.findOne(filter);
            if (checkExist) {
                throw new Error('Course already exists');
            }
            const course = new this.courseModel(courseData);
            return await course.save();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to register course');
        }
    }
    async delete(id) {
        try {
            const query = { _id: id };
            const course = await this.courseModel.deleteOne(query);
            if (course.deletedCount !== 1) {
                throw new common_1.NotFoundException('Course not found');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete course');
        }
    }
    async edit(id, updateData) {
        try {
            const filter = { _id: id };
            const update = { $set: updateData };
            const course = await this.courseModel.updateOne(filter, update);
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to edit course');
        }
    }
    async list(page, limit, sortBy, sortOrder) {
        try {
            const skip = (page - 1) * limit;
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
            return await this.courseModel
                .find()
                .skip(skip)
                .limit(limit)
                .sort(sortOptions);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to list courses');
        }
    }
    async profile(id) {
        try {
            const course = await this.courseModel.findOne({ _id: id });
            if (!course) {
                throw new common_1.NotFoundException('Course not found');
            }
            return course;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get course profile');
        }
    }
    async getCourseOptionByName(name) {
        try {
            const filter = { name: { $regex: name } };
            return await this.courseModel.find(filter).select('name');
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to get course options by name');
        }
    }
};
exports.CrmCourseService = CrmCourseService;
exports.CrmCourseService = CrmCourseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_course_entity_1.CrmCourse.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CrmCourseService);
//# sourceMappingURL=crm.course.service.js.map