"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmModule = void 0;
const common_1 = require("@nestjs/common");
const crm_report_module_1 = require("./crm.report/crm.report.module");
const crm_source_module_1 = require("./crm.source/crm.source.module");
const crm_assign_history_module_1 = require("./crm.assign-history/crm.assign-history.module");
const crm_action_module_1 = require("./crm.action/crm.action.module");
const crm_lead_module_1 = require("./crm.lead/crm.lead.module");
const crm_status_module_1 = require("./crm.status/crm.status.module");
const crm_course_module_1 = require("./crm.course/crm.course.module");
let CrmModule = class CrmModule {
};
exports.CrmModule = CrmModule;
exports.CrmModule = CrmModule = __decorate([
    (0, common_1.Module)({
        imports: [
            crm_report_module_1.CrmReportModule,
            crm_source_module_1.CrmSourceModule,
            crm_assign_history_module_1.CrmAssignHistoryModule,
            crm_action_module_1.CrmActionModule,
            crm_lead_module_1.CrmLeadModule,
            crm_status_module_1.CrmStatusModule,
            crm_course_module_1.CrmCourseModule,
        ],
        controllers: [],
        providers: [],
        exports: [],
    })
], CrmModule);
//# sourceMappingURL=crm.module.js.map