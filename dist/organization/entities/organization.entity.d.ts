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
export declare class Organization extends Document {
    name: string;
    type: string;
    orgId: Types.ObjectId;
    email: string;
    contactNo: string;
    city: string;
    state: string;
    address: string;
    zipcode: string;
    logoUrl: string;
    orgUrl: string;
    headName: string;
    headContact: string;
    headEmail: string;
    headPosition: string;
    status: string;
    createdBy: Types.ObjectId;
    updatedBy: Types.ObjectId;
    dateCreated: Date;
    dateUpdated: Date;
}
export declare const OrganizationSchema: import("mongoose").Schema<Organization, import("mongoose").Model<Organization, any, any, any, Document<unknown, any, Organization> & Organization & {
    _id: Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Organization, Document<unknown, {}, import("mongoose").FlatRecord<Organization>> & import("mongoose").FlatRecord<Organization> & {
    _id: Types.ObjectId;
}>;
