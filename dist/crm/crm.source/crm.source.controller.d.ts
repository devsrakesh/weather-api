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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { CreateCrmSourceDto } from './dto/create-crm.source.dto';
import { UpdateCrmSourceDto } from './dto/update-crm.source.dto';
import { CrmSourceService } from './crm.source.service';
export declare class CrmSourceController {
    private readonly sourceService;
    constructor(sourceService: CrmSourceService);
    createSource(createSourceDto: CreateCrmSourceDto): Promise<{
        status: number;
        data: import("mongoose").Document<unknown, {}, import("./entities/crm.source.entity").CrmSource> & import("./entities/crm.source.entity").CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        };
        msg: string;
    }>;
    deleteSource(id: string, orgId: string): Promise<{
        is_deleted: boolean;
        statusCode: number;
        msg: string;
    }>;
    updateSource(id: string, orgId: string, updateSourceDto: UpdateCrmSourceDto): Promise<{
        message: string;
        status: number;
        data: import("mongoose").Document<unknown, {}, import("./entities/crm.source.entity").CrmSource> & import("./entities/crm.source.entity").CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        };
    } | {
        message: string;
        status: number;
        data: import("mongoose").UpdateWriteOpResult;
    }>;
    getAllSources(): Promise<{
        sourceCount: number;
        data: (import("mongoose").Document<unknown, {}, import("./entities/crm.source.entity").CrmSource> & import("./entities/crm.source.entity").CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    getSourceById(id: string, orgId: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/crm.source.entity").CrmSource> & import("./entities/crm.source.entity").CrmSource & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSourceOptionsByName(name: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, import("./entities/crm.source.entity").CrmSource> & import("./entities/crm.source.entity").CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
}
