import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { hasPermission } from '../utils/permission.utils';
import { UserService } from 'src/user/user.service';
import { RoleService } from 'src/role/role.service';
import { CRUDPermission } from 'src/role/enum/permission.enum';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private roleService: RoleService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const resource = this.reflector.get<string>('resource', context.getHandler());
    const action = this.reflector.get<CRUDPermission>('action', context.getHandler());

    if (!resource || !action) {
      throw new ForbiddenException('Resource or action not defined');
    }

    const request = context.switchToHttp().getRequest();
    const roleId = request.user.role;

    const role = await this.roleService.findOne(roleId);

    if (await hasPermission(role, resource, action)) {
      return true;
    }

    throw new ForbiddenException(`You do not have permission to ${action} on ${resource}`);
  }
}
