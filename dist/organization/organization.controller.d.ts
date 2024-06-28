import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { Response } from 'src/common/interceptor/response.interface';
export declare class OrganizationController {
    private readonly organizationService;
    constructor(organizationService: OrganizationService);
    create(createOrganizationDto: CreateOrganizationDto): Promise<Response<Organization>>;
    delete(id: string): Promise<void>;
    update(id: string, updateOrganizationDto: UpdateOrganizationDto): Promise<Organization>;
    findAll(page: number, itemsPerPage: number): Promise<Response<Organization[]>>;
    findById(id: string): Promise<Response<Organization>>;
}
