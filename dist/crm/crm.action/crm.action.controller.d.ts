import { CreateCrmActionDto, UpdateCrmActionDto } from './dto';
import { CrmAction } from './entities/crm.action.entity';
import { CrmActionService } from './crm.action.service';
import { Response } from 'src/common/interceptor/response.interface';
export declare class CrmActionController {
    private readonly actionService;
    constructor(actionService: CrmActionService);
    createAction(createActionDto: CreateCrmActionDto): Promise<Response<CrmAction>>;
    deleteAction(id: string, orgId: string): Promise<boolean>;
    updateAction(id: string, orgId: string, updateActionDto: UpdateCrmActionDto): Promise<Response<CrmAction>>;
    getAllActions(page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<Response<CrmAction[]>>;
    list(page?: number, itemsPerPage?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<Response<any[]>>;
}
