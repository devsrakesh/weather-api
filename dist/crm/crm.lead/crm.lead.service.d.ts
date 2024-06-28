/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { CrmLead } from './entities/crm.lead.entity';
import { Model } from 'mongoose';
import { CrmCourse } from '../crm.course/entities/crm.course.entity';
import { CrmSource } from '../crm.source/entities/crm.source.entity';
import { CrmAction } from '../crm.action/entities/crm.action.entity';
import { CrmStatus } from '../crm.status/entities/crm.status.entity';
import { User } from 'src/user/entity/user.entity';
import { CrmAssignHistory } from '../crm.assign-history/entities/crm.assign-history.entity';
import { CrmReport } from '../crm.report/entities/crm.report.entity';
export declare class CrmLeadService {
    private leadModel;
    private courseModel;
    private sourceModel;
    private actionModel;
    private statusModel;
    private userModel;
    private reportModel;
    private assignHistoryModel;
    constructor(leadModel: Model<CrmLead>, courseModel: Model<CrmCourse>, sourceModel: Model<CrmSource>, actionModel: Model<CrmAction>, statusModel: Model<CrmStatus>, userModel: Model<User>, reportModel: Model<CrmReport>, assignHistoryModel: Model<CrmAssignHistory>);
    register(reqBody: any): Promise<any>;
    deleteLeads(filter: any): Promise<any>;
    assignLeads(filter: any, updateData: any): Promise<any>;
    editLead(reqBody: any): Promise<any>;
    listLeads(reqBody: any): Promise<any>;
    getProfile(leadId: string, orgId: string): Promise<CrmLead>;
    getListAggregate(filterData: any, paginationData: any): Promise<any>;
    getNameOptions(name: string): Promise<any>;
    getLocationOptions(location: string): Promise<any>;
    getMobileOptions(contactNo: string): Promise<any>;
    getAllNameOptions(): Promise<any>;
    assignLeadWithHistory(leadData: any): Promise<any>;
    editWithReport(leadData: any): Promise<any>;
    leadActionReportByImportDate(): Promise<any>;
}
