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
import { Document } from 'mongoose';
export declare class CrmLead extends Document {
    orgId: string;
    name: string;
    contactNo: string;
    location: string;
    course: string;
    source: string;
    action: string;
    comment: string;
    status: string;
    assignedTo: string;
    assignedBy: string;
    assignedDate: Date;
}
export declare const CrmLeadSchema: import("mongoose").Schema<CrmLead, import("mongoose").Model<CrmLead, any, any, any, Document<unknown, any, CrmLead> & CrmLead & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, CrmLead, Document<unknown, {}, import("mongoose").FlatRecord<CrmLead>> & import("mongoose").FlatRecord<CrmLead> & {
    _id: import("mongoose").Types.ObjectId;
}>;
