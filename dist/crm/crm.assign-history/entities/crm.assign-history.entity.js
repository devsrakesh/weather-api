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
exports.CrmAssignHistorySchema = exports.CrmAssignHistory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CrmAssignHistory = class CrmAssignHistory extends mongoose_2.Document {
};
exports.CrmAssignHistory = CrmAssignHistory;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmAssignHistory.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmAssignHistory.prototype, "leadId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmAssignHistory.prototype, "assignedTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmAssignHistory.prototype, "assignedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: Date.now }),
    __metadata("design:type", Date)
], CrmAssignHistory.prototype, "assignedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CrmAssignHistory.prototype, "totalLead", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CrmAssignHistory.prototype, "totalAssigned", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Number)
], CrmAssignHistory.prototype, "totalExist", void 0);
exports.CrmAssignHistory = CrmAssignHistory = __decorate([
    (0, mongoose_1.Schema)({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })
], CrmAssignHistory);
exports.CrmAssignHistorySchema = mongoose_1.SchemaFactory.createForClass(CrmAssignHistory);
//# sourceMappingURL=crm.assign-history.entity.js.map