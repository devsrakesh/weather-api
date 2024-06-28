import { CRUDPermission } from '../enum/permission.enum';
export declare class PermissionDto {
    resource: string;
    actions: CRUDPermission[];
}
