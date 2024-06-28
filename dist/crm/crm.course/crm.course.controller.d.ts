import { CreateCrmCourseDto } from './dto/create-crm.course.dto';
import { UpdateCrmCourseDto } from './dto/update-crm.course.dto';
import { CrmCourse } from './entities/crm.course.entity';
import { CrmCourseService } from './crm.course.service';
export declare class CrmCourseController {
    private courseService;
    constructor(courseService: CrmCourseService);
    register(courseData: CreateCrmCourseDto): Promise<CrmCourse>;
    delete(id: string): Promise<void>;
    edit(id: string, updateData: UpdateCrmCourseDto): Promise<void>;
    list(page: number, limit: number, sortBy: string, sortOrder: string): Promise<CrmCourse[]>;
    profile(id: string): Promise<CrmCourse>;
    getCourseOptionByName(name: string): Promise<CrmCourse[]>;
}
