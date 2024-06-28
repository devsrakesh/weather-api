import { CrmLeadService } from './crm.lead.service';
export declare class CrmLeadController {
    private readonly leadService;
    constructor(leadService: CrmLeadService);
    register(reqBody: any): Promise<any>;
    deleteLeads(filter: any): Promise<any>;
    assignLeads(reqBody: any): Promise<any>;
    editLead(reqBody: any): Promise<any>;
    listLeads(reqBody: any): Promise<any>;
    getProfile(leadId: string, orgId: string): Promise<any>;
    getListAggregate(filterData: any, paginationData: any): Promise<any>;
    getNameOptions(name: string): Promise<any>;
    getLocationOptions(location: string): Promise<any>;
    getMobileOptions(contactNo: string): Promise<any>;
    getAllNameOptions(): Promise<any>;
    leadActionReportByImportDate(): Promise<any>;
}
