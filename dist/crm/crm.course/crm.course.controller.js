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
exports.CrmCourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_crm_course_dto_1 = require("./dto/create-crm.course.dto");
const update_crm_course_dto_1 = require("./dto/update-crm.course.dto");
const crm_course_entity_1 = require("./entities/crm.course.entity");
const crm_course_service_1 = require("./crm.course.service");
let CrmCourseController = class CrmCourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async register(courseData) {
        return this.courseService.register(courseData);
    }
    async delete(id) {
        return this.courseService.delete(id);
    }
    async edit(id, updateData) {
        return this.courseService.edit(id, updateData);
    }
    async list(page, limit, sortBy, sortOrder) {
        return this.courseService.list(page, limit, sortBy, sortOrder);
    }
    async profile(id) {
        return this.courseService.profile(id);
    }
    async getCourseOptionByName(name) {
        return this.courseService.getCourseOptionByName(name);
    }
};
exports.CrmCourseController = CrmCourseController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new course' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Course created successfully',
        type: crm_course_entity_1.CrmCourse,
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid course data' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_crm_course_dto_1.CreateCrmCourseDto]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "register", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a course by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course deleted successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid course ID' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "delete", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a course by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course updated successfully' }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid course ID or data' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_crm_course_dto_1.UpdateCrmCourseDto]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "edit", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a list of courses' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of courses',
        type: [crm_course_entity_1.CrmCourse],
    }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a course by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Course details', type: crm_course_entity_1.CrmCourse }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid course ID' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "profile", null);
__decorate([
    (0, common_1.Get)('options'),
    (0, swagger_1.ApiOperation)({ summary: 'Get course options by name' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Course options',
        type: [crm_course_entity_1.CrmCourse],
    }),
    (0, swagger_1.ApiBadRequestResponse)({ description: 'Invalid name' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CrmCourseController.prototype, "getCourseOptionByName", null);
exports.CrmCourseController = CrmCourseController = __decorate([
    (0, swagger_1.ApiTags)('Courses'),
    (0, common_1.Controller)('courses'),
    __metadata("design:paramtypes", [crm_course_service_1.CrmCourseService])
], CrmCourseController);
//# sourceMappingURL=crm.course.controller.js.map