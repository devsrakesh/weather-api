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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const user_entity_1 = require("./entity/user.entity");
const update_user_dto_1 = require("./dto/update-user.dto");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async findAll(pageSize, pageNumber, sortBy = 'createdAt', sortOrder = 'asc') {
        try {
            const users = await this.userService.findAll(pageSize, pageNumber, sortBy, sortOrder);
            if (!users || users.length === 0) {
                throw new common_1.NotFoundException('No users found');
            }
            console.log('🚀 ~ UserController ~ users:', users);
            return { data: users, message: 'successfully get user' };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('An error occurred while retrieving users.');
        }
    }
    async findOne(id) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return { data: user, message: 'successfully get user' };
    }
    async create(createUserDto) {
        const data = await this.userService.create(createUserDto);
        return { data, message: 'User created Successfully' };
    }
    async update(id, updateUserDto) {
        const data = await this.userService.update(id, updateUserDto);
        return { data, message: 'User Updated successfully' };
    }
    async remove(id) {
        await this.userService.remove(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all users with pagination and sorting' }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', type: Number, required: true }),
    (0, swagger_1.ApiQuery)({ name: 'pageNumber', type: Number, required: true }),
    (0, swagger_1.ApiQuery)({
        name: 'sortBy',
        type: String,
        required: false,
        enum: ['createdAt', 'updatedAt'],
    }),
    (0, swagger_1.ApiQuery)({
        name: 'sortOrder',
        type: String,
        required: false,
        enum: ['asc', 'desc'],
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'List of users retrieved successfully',
        type: user_entity_1.User,
        isArray: true,
    }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'No users found' }),
    (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }),
    __param(0, (0, common_1.Query)('pageSize')),
    __param(1, (0, common_1.Query)('pageNumber')),
    __param(2, (0, common_1.Query)('sortBy')),
    __param(3, (0, common_1.Query)('sortOrder')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User details', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new user' }),
    (0, swagger_1.ApiBody)({ type: create_user_dto_1.CreateUserDto }),
    (0, swagger_1.ApiResponse)({
        status: 201,
        description: 'User created successfully',
        type: user_entity_1.User,
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'User ID' }),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'User updated successfully',
        type: user_entity_1.User,
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete user by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'string', description: 'User ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted successfully' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map