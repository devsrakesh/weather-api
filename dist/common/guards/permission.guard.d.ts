import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleService } from 'src/role/role.service';
export declare class PermissionsGuard implements CanActivate {
    private reflector;
    private roleService;
    constructor(reflector: Reflector, roleService: RoleService);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
