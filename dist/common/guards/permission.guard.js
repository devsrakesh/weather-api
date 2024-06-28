"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionsGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const permission_utils_1 = require("../utils/permission.utils");
const role_service_1 = require("../../role/role.service");
let PermissionsGuard = class PermissionsGuard {
    constructor(reflector, roleService) {
        this.reflector = reflector;
        this.roleService = roleService;
    }
    async canActivate(context) {
        const resource = this.reflector.get('resource', context.getHandler());
        const action = this.reflector.get('action', context.getHandler());
        if (!resource || !action) {
            throw new common_1.ForbiddenException('Resource or action not defined');
        }
        const request = context.switchToHttp().getRequest();
        const roleId = request.user.role;
        const role = await this.roleService.findOne(roleId);
        if (await (0, permission_utils_1.hasPermission)(role, resource, action)) {
            return true;
        }
        throw new common_1.ForbiddenException(`You do not have permission to ${action} on ${resource}`);
    }
};
exports.PermissionsGuard = PermissionsGuard;
exports.PermissionsGuard = PermissionsGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        role_service_1.RoleService])
], PermissionsGuard);
//# sourceMappingURL=permission.guard.js.map