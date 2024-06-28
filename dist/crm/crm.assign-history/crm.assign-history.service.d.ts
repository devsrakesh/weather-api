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
import { Model } from 'mongoose';
import { CrmAssignHistory } from './entities/crm.assign-history.entity';
import { CreateCrmAssignHistoryDto } from './dto/create-crm.assign-history.dto';
import { UpdateCrmAssignHistoryDto } from './dto/update-crm.assign-history.dto';
export declare class CrmAssignHistoryService {
    private assignHistoryModel;
    constructor(assignHistoryModel: Model<CrmAssignHistory>);
    register(reportData: CreateCrmAssignHistoryDto): Promise<CrmAssignHistory>;
    delete(id: string): Promise<boolean>;
    edit(id: string, updateData: UpdateCrmAssignHistoryDto): Promise<any>;
    list(page?: number, itemsPerPage?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<{
        totalReports: number;
        data: CrmAssignHistory[];
    }>;
    profile(id: string): Promise<CrmAssignHistory>;
}
