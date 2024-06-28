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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmCourseSchema = exports.CrmCourse = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CrmCourse = class CrmCourse extends mongoose_2.Document {
};
exports.CrmCourse = CrmCourse;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CrmCourse.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', required: true }),
    __metadata("design:type", String)
], CrmCourse.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CrmCourse.prototype, "color", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'active' }),
    __metadata("design:type", String)
], CrmCourse.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', required: true }),
    __metadata("design:type", String)
], CrmCourse.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId', required: true }),
    __metadata("design:type", String)
], CrmCourse.prototype, "updatedBy", void 0);
exports.CrmCourse = CrmCourse = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
], CrmCourse);
exports.CrmCourseSchema = mongoose_1.SchemaFactory.createForClass(CrmCourse);
//# sourceMappingURL=crm.course.entity.js.map