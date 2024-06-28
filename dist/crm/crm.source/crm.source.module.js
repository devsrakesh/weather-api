"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmSourceModule = void 0;
const common_1 = require("@nestjs/common");
const crm_source_service_1 = require("./crm.source.service");
const crm_source_controller_1 = require("./crm.source.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crm_source_entity_1 = require("./entities/crm.source.entity");
let CrmSourceModule = class CrmSourceModule {
};
exports.CrmSourceModule = CrmSourceModule;
exports.CrmSourceModule = CrmSourceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_source_entity_1.CrmSource.name, schema: crm_source_entity_1.CrmSourceSchema },
            ]),
        ],
        controllers: [crm_source_controller_1.CrmSourceController],
        providers: [crm_source_service_1.CrmSourceService],
    })
], CrmSourceModule);
//# sourceMappingURL=crm.source.module.js.map