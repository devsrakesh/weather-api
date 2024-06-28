"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUser = void 0;
const common_1 = require("@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    console.log(request);
    if (data) {
        return [];
    }
    return [];
});
//# sourceMappingURL=get-user.decorator.js.map