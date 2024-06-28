import { CRUDPermission } from '../enum/permission.enum';
export interface ResourcePermission {
    resource: string;
    actions: CRUDPermission[];
}
