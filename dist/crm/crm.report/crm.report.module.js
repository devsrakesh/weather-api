"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmReportModule = void 0;
const common_1 = require("@nestjs/common");
const crm_report_service_1 = require("./crm.report.service");
const crm_report_controller_1 = require("./crm.report.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crm_report_entity_1 = require("./entities/crm.report.entity");
let CrmReportModule = class CrmReportModule {
};
exports.CrmReportModule = CrmReportModule;
exports.CrmReportModule = CrmReportModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_report_entity_1.CrmReport.name, schema: crm_report_entity_1.CrmReportSchema },
            ]),
        ],
        controllers: [crm_report_controller_1.CrmReportController],
        providers: [crm_report_service_1.CrmReportService],
    })
], CrmReportModule);
//# sourceMappingURL=crm.report.module.js.map