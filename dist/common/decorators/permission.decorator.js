"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Permission = void 0;
const common_1 = require("@nestjs/common");
const Permission = (resource, action) => (0, common_1.SetMetadata)('resource', resource) && (0, common_1.SetMetadata)('action', action);
exports.Permission = Permission;
//# sourceMappingURL=permission.decorator.js.map