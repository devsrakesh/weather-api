import { CrmStatusService } from './crm.status.service';
import { CreateCrmStatusDto } from './dto/create-crm.status.dto';
import { CrmStatus } from './entities/crm.status.entity';
import { UpdateCrmStatusDto } from './dto/update-crm.status.dto';
export declare class CrmStatusController {
    private readonly statusService;
    constructor(statusService: CrmStatusService);
    create(createStatusDto: CreateCrmStatusDto): Promise<CrmStatus>;
    findAll(): Promise<CrmStatus[]>;
    findOne(id: string): Promise<CrmStatus>;
    update(id: string, updateStatusDto: UpdateCrmStatusDto): Promise<CrmStatus>;
    remove(id: string): Promise<void>;
}
