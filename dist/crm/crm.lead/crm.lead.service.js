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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrmLeadService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const crm_lead_entity_1 = require("./entities/crm.lead.entity");
const mongoose_2 = require("mongoose");
const crm_course_entity_1 = require("../crm.course/entities/crm.course.entity");
const crm_source_entity_1 = require("../crm.source/entities/crm.source.entity");
const crm_action_entity_1 = require("../crm.action/entities/crm.action.entity");
const crm_status_entity_1 = require("../crm.status/entities/crm.status.entity");
const user_entity_1 = require("../../user/entity/user.entity");
const crm_assign_history_entity_1 = require("../crm.assign-history/entities/crm.assign-history.entity");
const crm_report_entity_1 = require("../crm.report/entities/crm.report.entity");
const moment_1 = require("moment");
const email_utils_1 = require("../../common/utils/email.utils");
let CrmLeadService = class CrmLeadService {
    constructor(leadModel, courseModel, sourceModel, actionModel, statusModel, userModel, reportModel, assignHistoryModel) {
        this.leadModel = leadModel;
        this.courseModel = courseModel;
        this.sourceModel = sourceModel;
        this.actionModel = actionModel;
        this.statusModel = statusModel;
        this.userModel = userModel;
        this.reportModel = reportModel;
        this.assignHistoryModel = assignHistoryModel;
    }
    async register(reqBody) {
        try {
            const leadData = reqBody;
            const contactNoArray = leadData.map((lead) => lead.contactNo);
            const existingLeads = await this.leadModel.find({
                contactNo: { $in: contactNoArray },
            });
            const newLeads = leadData.filter((lead) => !existingLeads.some((existingLead) => existingLead.contactNo === lead.contactNo));
            const getObjectId = async (model, name) => {
                const newData = await model.findOne({ name });
                return newData ? newData._id : null;
            };
            const UpdatedLeads = await Promise.all(newLeads.map(async (lead) => ({
                orgId: lead.orgId,
                name: lead.name,
                location: lead.location,
                contactNo: lead.contactNo,
                course: await getObjectId(this.courseModel, lead.course),
                action: await getObjectId(this.actionModel, lead.action),
                comment: lead.comment,
                source: await getObjectId(this.sourceModel, lead.source),
                status: await getObjectId(this.statusModel, lead.status),
                assignedDate: new Date(),
                assignedTo: await getObjectId(this.userModel, lead.assignedTo),
                assignedBy: await getObjectId(this.userModel, lead.assignedBy),
            })));
            const leadRes = await this.leadModel.insertMany(UpdatedLeads);
            const totallead = contactNoArray.length;
            const insertedDatas = leadData.length - existingLeads.length;
            const duplicates = existingLeads.length;
            return {
                data: leadRes,
                totalLead: totallead,
                alreadyExists: duplicates,
                insertDataCount: insertedDatas,
                status: leadRes.length > 0 ? 1 : 0,
                message: `Total Leads: ${totallead} | Inserted : ${insertedDatas} | Duplicates : ${duplicates}`,
            };
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async deleteLeads(filter) {
        try {
            const result = await this.leadModel.deleteMany(filter);
            return {
                statusCode: 200,
                message: 'Documents deleted successfully',
                result: result,
            };
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async assignLeads(filter, updateData) {
        try {
            const filterLeads = await this.leadModel.find(filter);
            let getLeads = [];
            if (filterLeads) {
                getLeads = filterLeads.map((lead, index) => ({
                    orgId: lead.orgId,
                    leadId: lead._id,
                    assignedTo: lead.assignedTo,
                    assignedBy: lead.assignedBy,
                }));
                await this.assignHistoryModel.insertMany(getLeads);
                const response = await this.leadModel.updateMany(filter, updateData);
                return {
                    message: 'Lead Update Successful',
                    status: 1,
                    data: response,
                };
            }
            else {
                return {
                    message: 'No leads found for the given filter',
                    status: 0,
                };
            }
        }
        catch (error) {
            throw new Error('Lead Not Updated Successfully');
        }
    }
    async editLead(reqBody) {
        try {
            const { _id, orgId, updateData } = reqBody;
            const filter = { $and: [{ _id }, { orgId }] };
            const checkContact = await this.leadModel.findOne({
                $and: [
                    { _id: { $ne: _id } },
                    { orgId },
                    { contactNo: updateData.contactNo },
                ],
            });
            if (checkContact) {
                return {
                    message: 'Contact No. already exists',
                    status: 0,
                    data: checkContact,
                };
            }
            else {
                const leadRes = await this.leadModel.updateOne(filter, {
                    $set: updateData,
                });
                return {
                    message: 'Lead Update Successful',
                    status: 1,
                    data: leadRes,
                };
            }
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async listLeads(reqBody) {
        try {
            const { itemsPerPage, page, filter } = reqBody;
            const skipCount = page * itemsPerPage;
            const limitCount = itemsPerPage;
            const startDateCreated = new Date(filter.dateCreated[0]);
            const endDateCreated = new Date(filter.dateCreated[1]);
            const nameRegex = new RegExp(filter.name.join('|'), 'i');
            const contactRegex = new RegExp(filter.contactNo.join('|'), 'i');
            const locationRegex = new RegExp(filter.location.join('|'), 'i');
            const leadPipeline = [
                { $match: { orgId: filter.orgId } },
                { $match: { name: { $regex: nameRegex } } },
                { $match: { source: { $in: filter.source } } },
                { $match: { contactNo: { $regex: contactRegex } } },
                { $match: { status: { $in: filter.status } } },
                { $match: { assignedTo: { $in: filter.assignedTo } } },
                { $match: { course: { $in: filter.course } } },
                { $match: { location: { $regex: locationRegex } } },
                { $match: { action: { $in: filter.action } } },
                {
                    $match: {
                        dateCreated: { $gte: startDateCreated, $lte: endDateCreated },
                    },
                },
                { $skip: skipCount },
                { $limit: limitCount },
                {
                    $lookup: {
                        from: 'courses',
                        localField: 'course',
                        foreignField: '_id',
                        as: 'courseInfo',
                    },
                },
                { $unwind: { path: '$courseInfo', preserveNullAndEmptyArrays: true } },
                {
                    $lookup: {
                        from: 'sources',
                        localField: 'source',
                        foreignField: '_id',
                        as: 'sourceInfo',
                    },
                },
                { $unwind: { path: '$sourceInfo', preserveNullAndEmptyArrays: true } },
                {
                    $project: {
                        _id: 1,
                        orgId: 1,
                        name: 1,
                        contactNo: 1,
                        source: '$sourceInfo.name',
                    },
                },
            ];
            const [totalLeads, leads] = await Promise.all([
                this.leadModel.countDocuments(filter),
                this.leadModel.aggregate(leadPipeline).exec(),
            ]);
            return { leadCount: totalLeads, data: leads };
        }
        catch (error) {
            throw new Error('Internal Server Error');
        }
    }
    async getProfile(leadId, orgId) {
        const query = { _id: leadId, orgId };
        const lead = await this.leadModel.findOne(query).exec();
        if (!lead) {
            throw new common_1.NotFoundException('Lead not found');
        }
        return lead;
    }
    async getListAggregate(filterData, paginationData) {
        try {
            const { itemsPerPage, page } = paginationData;
            const skipCount = page * itemsPerPage;
            const limitCount = itemsPerPage;
            const { orgId, name, contactNo, location, course, action, source, status, dateCreated, assignedTo, assignedBy, assignedDate, dateUpdated, updatedBy, } = filterData;
            const startDateCreated = new Date(dateCreated[0]);
            const endDateCreated = new Date(dateCreated[1]);
            const startAssignedDate = new Date(assignedDate);
            const endAssignedDate = new Date(assignedDate);
            const nameRegex = new RegExp(name.join('|'), 'i');
            const contactRegex = new RegExp(contactNo.join('|'), 'i');
            const locationRegex = new RegExp(location.join('|'), 'i');
            const filter = {
                orgId,
                name: name.length > 0 ? { $regex: nameRegex } : {},
                source: source.length > 0 ? { $in: source } : {},
                contactNo: contactNo.length > 0 ? { $regex: contactRegex } : {},
                status: status.length > 0 ? { $in: status } : {},
                assignedTo: assignedTo.length > 0 ? { $in: assignedTo } : {},
                course: course.length > 0 ? { $in: course } : {},
                location: location.length > 0 ? { $regex: locationRegex } : {},
                action: action.length > 0 ? { $in: action } : {},
                dateCreated: dateCreated.length
                    ? { $gte: startDateCreated, $lte: endDateCreated }
                    : {},
                assignedDate: assignedDate[0] || assignedDate[1]
                    ? { $gte: startAssignedDate, $lte: endAssignedDate }
                    : {},
            };
            const [totalLead, leadData] = await Promise.all([
                this.leadModel.countDocuments(filter),
                this.leadModel
                    .aggregate([
                    { $match: filter },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'assignedTo',
                            foreignField: '_id',
                            as: 'assignedInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$assignedInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'courses',
                            localField: 'course',
                            foreignField: '_id',
                            as: 'courseInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$courseInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'statuses',
                            localField: 'status',
                            foreignField: '_id',
                            as: 'statusInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$statusInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'actions',
                            localField: 'action',
                            foreignField: '_id',
                            as: 'actionInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$actionInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'assignedBy',
                            foreignField: '_id',
                            as: 'assignedByInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$assignedByInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'sources',
                            localField: 'source',
                            foreignField: '_id',
                            as: 'sourceInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$sourceInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    {
                        $lookup: {
                            from: 'users',
                            localField: 'updatedBy',
                            foreignField: '_id',
                            as: 'updatedByInfo',
                        },
                    },
                    {
                        $unwind: {
                            path: '$updatedByInfo',
                            preserveNullAndEmptyArrays: true,
                        },
                    },
                    { $skip: skipCount },
                    { $limit: limitCount },
                    {
                        $project: {
                            orgId: '$orgId',
                            _id: '$_id',
                            name: '$name',
                            contactNo: '$contactNo',
                            course: '$courseInfo.name',
                            source: '$sourceInfo.name',
                            comment: '$comment',
                            action: '$actionInfo.name',
                            location: '$location',
                            assignedTo: '$assignedInfo.name',
                            assignedBy: '$assignedByInfo.name',
                            updatedBy: '$updatedByInfo.name',
                            dateCreated: '$dateCreated',
                            dateUpdated: '$dateUpdated',
                            assignedDate: '$assignedDate',
                        },
                    },
                ])
                    .exec(),
            ]);
            return { leadCount: totalLead, data: leadData };
        }
        catch (err) {
            throw new Error('Internal Server Error');
        }
    }
    async getNameOptions(name) {
        const filter = { name: { $regex: name } };
        const leadOptions = await this.leadModel
            .find(filter)
            .limit(10)
            .select('name');
        return { data: leadOptions };
    }
    async getLocationOptions(location) {
        const filter = { location: { $regex: location } };
        const leadOptions = await this.leadModel
            .find(filter)
            .select('location')
            .limit(10);
        return { data: leadOptions };
    }
    async getMobileOptions(contactNo) {
        const filter = { contactNo: { $regex: contactNo } };
        const leadOptions = await this.userModel
            .find(filter)
            .select('contactNo')
            .limit(10);
        return { data: leadOptions };
    }
    async getAllNameOptions() {
        const leadOptions = await this.leadModel.find({}).select('name');
        return { data: leadOptions };
    }
    async assignLeadWithHistory(leadData) {
        try {
            const { orgId, lead_array, assigned_to, assigned_by, assigned_date } = leadData.filter;
            const filter = {
                orgId,
                assigned_to,
                assigned_date: new Date(assigned_date),
                lead_id: { $in: lead_array },
            };
            const existLead = await this.assignHistoryModel.find(filter);
            const existingLeadArray = existLead.map((item) => item.leadId.toString());
            const resultArray = lead_array.filter((lead) => !existingLeadArray.includes(lead.toString()));
            const newLeads = resultArray.map((item) => ({
                orgId,
                lead_id: item,
                assigned_to,
                assigned_by,
                assigned_date,
            }));
            const leadUpdated = await this.leadModel.updateMany({ orgId, _id: { $in: lead_array } }, { assigned_to });
            const subject = 'Lead Assigned';
            const text = `Total Leads: ${lead_array.length} | New Leads: ${newLeads.length} | Existing Leads: ${existingLeadArray.length}`;
            const date = (0, moment_1.default)().format('DD-MM-YYYY');
            const time = (0, moment_1.default)().format('hh:mm A');
            const totalLeads = newLeads.length;
            const getAssignedTo = await this.userModel.findOne({ _id: assigned_to });
            const getAssignedBy = await this.userModel.findOne({ _id: assigned_by });
            (0, email_utils_1.default)({
                to: getAssignedTo.email,
                subject,
                text,
                date,
                time,
                assigned_by: getAssignedBy.name.toUpperCase(),
                total_leads: totalLeads,
                assigned_to: getAssignedTo.name.toUpperCase(),
            });
            const leadRes = await this.assignHistoryModel.insertMany(newLeads);
            return {
                totalLeads: lead_array.length,
                assignLeads: newLeads.length,
                alreadyAssigned: existingLeadArray.length,
                lead_res: leadRes,
                leadUpdated,
            };
        }
        catch (err) {
            throw new Error(err.message || 'Internal Server Error');
        }
    }
    async editWithReport(leadData) {
        try {
            const { _id, orgId, updateData } = leadData;
            const dateUpdated = new Date(updateData.date_updated);
            const filter = { leadId: _id, orgId, dateUpdated };
            const existLeadReport = await this.reportModel.findOne(filter);
            if (existLeadReport) {
                await this.reportModel.updateOne(filter, { $set: updateData });
            }
            else {
                const newReport = new this.reportModel({
                    orgId,
                    leadId: _id,
                    comment: updateData.comment,
                    status: updateData.status,
                    action: updateData.action,
                    dateCreated: updateData.date_created,
                    assignedTo: updateData.assignedTo,
                    assigned_by: updateData.assignedBy,
                    assigned_date: updateData.assignedDate,
                    dateUpdated: updateData.dateUpdated,
                    updatedBy: updateData.updatedBy,
                    course: updateData.course,
                });
                await newReport.save();
            }
            const leadRes = await this.leadModel.updateOne({ _id, orgId }, updateData);
            return { LeadUpdate: leadRes };
        }
        catch (err) {
            throw new Error(err.message || 'Internal Server Error');
        }
    }
    async leadActionReportByImportDate() {
        try {
            const report = await this.leadModel.aggregate([
                { $match: {} },
                {
                    $group: {
                        _id: '$status',
                        statusCount: {
                            $sum: 1,
                        },
                    },
                },
                {
                    $lookup: {
                        from: 'status',
                        localField: '_id',
                        foreignField: '_id',
                        as: 'statusInfo',
                    },
                },
                {
                    $unwind: '$statusInfo',
                },
                {
                    $project: {
                        _id: 0,
                        label: '$statusInfo.name',
                        value: '$statusCount',
                    },
                },
            ]);
            const status = await this.statusModel.find({}).select('name');
            const mergedData = await Promise.all(status.map(async (statusItem) => {
                const matchingReport = report.find((reportItem) => reportItem.label.toString() === statusItem.name.toString());
                return {
                    label: statusItem.name,
                    value: matchingReport ? matchingReport.value : 0,
                };
            }));
            return { data: mergedData };
        }
        catch (error) {
            throw new Error(error.message || 'Internal Server Error');
        }
    }
};
exports.CrmLeadService = CrmLeadService;
exports.CrmLeadService = CrmLeadService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(crm_lead_entity_1.CrmLead.name)),
    __param(1, (0, mongoose_1.InjectModel)(crm_course_entity_1.CrmCourse.name)),
    __param(2, (0, mongoose_1.InjectModel)(crm_source_entity_1.CrmSource.name)),
    __param(3, (0, mongoose_1.InjectModel)(crm_action_entity_1.CrmAction.name)),
    __param(4, (0, mongoose_1.InjectModel)(crm_status_entity_1.CrmStatus.name)),
    __param(5, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __param(6, (0, mongoose_1.InjectModel)(crm_report_entity_1.CrmReport.name)),
    __param(7, (0, mongoose_1.InjectModel)(crm_assign_history_entity_1.CrmAssignHistory.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], CrmLeadService);
//# sourceMappingURL=crm.lead.service.js.map