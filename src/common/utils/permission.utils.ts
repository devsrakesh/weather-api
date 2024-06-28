import { Role } from 'src/role/entity/role.entity';
import { CRUDPermission } from 'src/role/enum/permission.enum';
import { User } from 'src/user/entity/user.entity';

export async function hasPermission(role: Role, resource: string, action: CRUDPermission): Promise<boolean> {
  if (!role.permissions) {
    return false;
  }

  return role.permissions.some((perm) => perm.resource === resource && perm.actions.includes(action));
}
