import { CrmReportService } from './crm.report.service';
export declare class CrmReportController {
    private readonly reportService;
    constructor(reportService: CrmReportService);
    register(reportData: any): Promise<any>;
    delete(id: string): Promise<any>;
    edit(id: string, reportData: any): Promise<any>;
    profile(id: string): Promise<any>;
    list(page?: number, limit?: number, sortBy?: string, sortOrder?: number): Promise<any>;
    paginatedList(req: any): Promise<any>;
}
