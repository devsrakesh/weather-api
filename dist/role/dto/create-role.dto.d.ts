import { PermissionDto } from './permission.dto';
export declare class CreateRoleDto {
    name: string;
    role: string;
    permissions: PermissionDto[];
}
