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
import { CrmSource } from './entities/crm.source.entity';
import { CreateCrmSourceDto } from './dto/create-crm.source.dto';
import { UpdateCrmSourceDto } from './dto/update-crm.source.dto';
export declare class CrmSourceService {
    private readonly sourceModel;
    constructor(sourceModel: Model<CrmSource>);
    register(createSourceDto: CreateCrmSourceDto): Promise<{
        status: number;
        data: import("mongoose").Document<unknown, {}, CrmSource> & CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        };
        msg: string;
    }>;
    delete(id: string, orgId: string): Promise<{
        is_deleted: boolean;
        statusCode: number;
        msg: string;
    }>;
    edit(id: string, orgId: string, updateSourceDto: UpdateCrmSourceDto): Promise<{
        message: string;
        status: number;
        data: import("mongoose").Document<unknown, {}, CrmSource> & CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        };
    } | {
        message: string;
        status: number;
        data: import("mongoose").UpdateWriteOpResult;
    }>;
    list(): Promise<{
        sourceCount: number;
        data: (import("mongoose").Document<unknown, {}, CrmSource> & CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    profile(id: string, orgId: string): Promise<import("mongoose").Document<unknown, {}, CrmSource> & CrmSource & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSourceOption(name: string): Promise<{
        data: (import("mongoose").Document<unknown, {}, CrmSource> & CrmSource & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    reportByImport(filterData: any): Promise<void>;
    reportDaily(filterData: any): Promise<void>;
}
