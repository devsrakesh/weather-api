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
exports.CrmReportSchema = exports.CrmReport = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CrmReport = class CrmReport extends mongoose_2.Document {
};
exports.CrmReport = CrmReport;
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmReport.prototype, "orgId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmReport.prototype, "leadId", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], CrmReport.prototype, "comment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmReport.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], CrmReport.prototype, "action", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId' }),
    __metadata("design:type", String)
], CrmReport.prototype, "assignedTo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId' }),
    __metadata("design:type", String)
], CrmReport.prototype, "assignedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Date)
], CrmReport.prototype, "assignedDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: 'ObjectId' }),
    __metadata("design:type", String)
], CrmReport.prototype, "courseId", void 0);
exports.CrmReport = CrmReport = __decorate([
    (0, mongoose_1.Schema)({
        timestamps: { createdAt: 'date_created', updatedAt: 'date_updated' },
    })
], CrmReport);
exports.CrmReportSchema = mongoose_1.SchemaFactory.createForClass(CrmReport);
//# sourceMappingURL=crm.report.entity.js.map