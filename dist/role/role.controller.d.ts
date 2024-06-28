import { RoleService } from './role.service';
import { Role } from './entity/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Response } from 'src/interceptor/response.interface';
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    create(createRoleDto: CreateRoleDto): Promise<Response<Role>>;
    findAll(pageSize: string, pageNumber: string, sortBy?: string, sortOrder?: 'asc' | 'desc'): Promise<Response<Role[]>>;
    findOne(id: string): Promise<Response<Role>>;
    update(id: string, updateRoleDto: UpdateRoleDto): Promise<Response<Role>>;
    remove(id: string): Promise<void>;
}
