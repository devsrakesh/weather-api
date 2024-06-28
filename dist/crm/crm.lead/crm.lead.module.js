"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmLeadModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const crm_lead_service_1 = require("./crm.lead.service");
const crm_lead_controller_1 = require("./crm.lead.controller");
const crm_lead_entity_1 = require("./entities/crm.lead.entity");
const crm_course_entity_1 = require("../crm.course/entities/crm.course.entity");
const crm_source_entity_1 = require("../crm.source/entities/crm.source.entity");
const crm_action_entity_1 = require("../crm.action/entities/crm.action.entity");
const crm_status_entity_1 = require("../crm.status/entities/crm.status.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const crm_report_entity_1 = require("../crm.report/entities/crm.report.entity");
const crm_assign_history_entity_1 = require("../crm.assign-history/entities/crm.assign-history.entity");
let CrmLeadModule = class CrmLeadModule {
};
exports.CrmLeadModule = CrmLeadModule;
exports.CrmLeadModule = CrmLeadModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_lead_entity_1.CrmLead.name, schema: crm_lead_entity_1.CrmLeadSchema },
                { name: crm_course_entity_1.CrmCourse.name, schema: crm_course_entity_1.CrmCourseSchema },
                { name: crm_source_entity_1.CrmSource.name, schema: crm_source_entity_1.CrmSourceSchema },
                { name: crm_action_entity_1.CrmAction.name, schema: crm_action_entity_1.CrmActionSchema },
                { name: crm_status_entity_1.CrmStatus.name, schema: crm_status_entity_1.CrmStatusSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
                { name: crm_report_entity_1.CrmReport.name, schema: crm_report_entity_1.CrmReportSchema },
                { name: crm_assign_history_entity_1.CrmAssignHistory.name, schema: crm_assign_history_entity_1.CrmAssignHistorySchema },
            ]),
        ],
        controllers: [crm_lead_controller_1.CrmLeadController],
        providers: [crm_lead_service_1.CrmLeadService],
    })
], CrmLeadModule);
//# sourceMappingURL=crm.lead.module.js.map