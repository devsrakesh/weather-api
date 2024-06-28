"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmActionModule = void 0;
const common_1 = require("@nestjs/common");
const crm_action_service_1 = require("./crm.action.service");
const crm_action_controller_1 = require("./crm.action.controller");
const mongoose_1 = require("@nestjs/mongoose");
const crm_action_entity_1 = require("./entities/crm.action.entity");
const user_entity_1 = require("../../user/entity/user.entity");
let CrmActionModule = class CrmActionModule {
};
exports.CrmActionModule = CrmActionModule;
exports.CrmActionModule = CrmActionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: crm_action_entity_1.CrmAction.name, schema: crm_action_entity_1.CrmActionSchema },
                { name: user_entity_1.User.name, schema: user_entity_1.UserSchema },
            ]),
        ],
        controllers: [crm_action_controller_1.CrmActionController],
        providers: [crm_action_service_1.CrmActionService],
    })
], CrmActionModule);
//# sourceMappingURL=crm.action.module.js.map