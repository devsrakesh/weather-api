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
import { CrmCourse } from './entities/crm.course.entity';
import { CreateCrmCourseDto } from './dto/create-crm.course.dto';
import { UpdateCrmCourseDto } from './dto/update-crm.course.dto';
export declare class CrmCourseService {
    private readonly courseModel;
    constructor(courseModel: Model<CrmCourse>);
    register(courseData: CreateCrmCourseDto): Promise<CrmCourse>;
    delete(id: string): Promise<void>;
    edit(id: string, updateData: UpdateCrmCourseDto): Promise<void>;
    list(page: number, limit: number, sortBy: string, sortOrder: string): Promise<CrmCourse[]>;
    profile(id: string): Promise<CrmCourse>;
    getCourseOptionByName(name: string): Promise<CrmCourse[]>;
}
