"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmCourseModule = void 0;
const common_1 = require("@nestjs/common");
const crm_course_service_1 = require("./crm.course.service");
const crm_course_controller_1 = require("./crm.course.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crm_course_entity_1 = require("./entities/crm.course.entity");
let CrmCourseModule = class CrmCourseModule {
};
exports.CrmCourseModule = CrmCourseModule;
exports.CrmCourseModule = CrmCourseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_course_entity_1.CrmCourse.name, schema: crm_course_entity_1.CrmCourseSchema },
            ]),
        ],
        controllers: [crm_course_controller_1.CrmCourseController],
        providers: [crm_course_service_1.CrmCourseService],
    })
], CrmCourseModule);
//# sourceMappingURL=crm.course.module.js.map