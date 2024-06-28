import { CrmAssignHistory } from './entities/crm.assign-history.entity';
import { CreateCrmAssignHistoryDto } from './dto/create-crm.assign-history.dto';
import { UpdateCrmAssignHistoryDto } from './dto/update-crm.assign-history.dto';
import { CrmAssignHistoryService } from './crm.assign-history.service';
export declare class CrmAssignHistoryController {
    private readonly assignHistoryService;
    constructor(assignHistoryService: CrmAssignHistoryService);
    register(reportData: CreateCrmAssignHistoryDto): Promise<CrmAssignHistory>;
    delete(id: string): Promise<void>;
    edit(id: string, updateData: UpdateCrmAssignHistoryDto): Promise<void>;
    list(page: number, itemsPerPage: number): Promise<{
        totalReports: number;
        data: CrmAssignHistory[];
    }>;
    profile(id: string): Promise<CrmAssignHistory>;
}
