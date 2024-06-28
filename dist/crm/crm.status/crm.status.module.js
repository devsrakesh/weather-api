"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmStatusModule = void 0;
const common_1 = require("@nestjs/common");
const crm_status_service_1 = require("./crm.status.service");
const crm_status_controller_1 = require("./crm.status.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crm_status_entity_1 = require("./entities/crm.status.entity");
let CrmStatusModule = class CrmStatusModule {
};
exports.CrmStatusModule = CrmStatusModule;
exports.CrmStatusModule = CrmStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_status_entity_1.CrmStatus.name, schema: crm_status_entity_1.CrmStatusSchema },
            ]),
        ],
        controllers: [crm_status_controller_1.CrmStatusController],
        providers: [crm_status_service_1.CrmStatusService],
    })
], CrmStatusModule);
//# sourceMappingURL=crm.status.module.js.map