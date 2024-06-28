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
import { CrmAction } from './entities/crm.action.entity';
import { CreateCrmActionDto, UpdateCrmActionDto } from './dto';
import { User } from 'src/user/entity/user.entity';
export declare class CrmActionService {
    private actionModel;
    private userModel;
    constructor(actionModel: Model<CrmAction>, userModel: Model<User>);
    createAction(createActionDto: CreateCrmActionDto): Promise<CrmAction>;
    deleteAction(id: string, orgId: string): Promise<boolean>;
    updateAction(id: string, orgId: string, updateActionDto: UpdateCrmActionDto): Promise<CrmAction>;
    list(page: number, itemsPerPage: number, sortBy: string, sortOrder: 'asc' | 'desc'): Promise<{
        count: number;
        data: any[];
    }>;
    getActionProfile(id: string, orgId: string): Promise<CrmAction>;
    getActionOptionsByName(name: string): Promise<CrmAction[]>;
    getAllActions(page?: number, limit?: number, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<{
        totalActions: number;
        actions: CrmAction[];
    }>;
}
