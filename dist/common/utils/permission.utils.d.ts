import { Role } from 'src/role/entity/role.entity';
import { CRUDPermission } from 'src/role/enum/permission.enum';
export declare function hasPermission(role: Role, resource: string, action: CRUDPermission): Promise<boolean>;
