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
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entity/user.entity';
export declare class CrmAction extends Document {
    name: string;
    orgId: Types.ObjectId;
    color: string;
    percentage: number;
    status: string;
    createdBy: User;
    updatedBy: User;
}
export type ActionDocument = CrmAction & Document;
export declare const CrmActionSchema: import("mongoose").Schema<CrmAction, import("mongoose").Model<CrmAction, any, any, any, Document<unknown, any, CrmAction> & CrmAction & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CrmAction, Document<unknown, {}, import("mongoose").FlatRecord<CrmAction>> & import("mongoose").FlatRecord<CrmAction> & {
    _id: Types.ObjectId;
}>;
