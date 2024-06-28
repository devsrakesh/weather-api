"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasPermission = void 0;
async function hasPermission(role, resource, action) {
    if (!role.permissions) {
        return false;
    }
    return role.permissions.some((perm) => perm.resource === resource && perm.actions.includes(action));
}
exports.hasPermission = hasPermission;
//# sourceMappingURL=permission.utils.js.map