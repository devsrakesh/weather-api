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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("./entity/user.entity");
const argon = require("argon2");
const auth_service_1 = require("../auth/auth.service");
let UserService = class UserService {
    constructor(userModel, auth) {
        this.userModel = userModel;
        this.auth = auth;
    }
    async findAll(pageSize, pageNumber, sortBy = 'createdAt', sortOrder = 'asc') {
        try {
            const skip = (parseInt(pageNumber) - 1) * parseInt(pageSize);
            const sortOptions = {};
            sortOptions[sortBy] = sortOrder === 'asc' ? 1 : -1;
            console.log('🚀 ~ UserService ~ pageSize:', typeof parseInt(pageSize));
            const data = await this.userModel
                .aggregate([
                { $sort: sortOptions },
                { $skip: skip },
                { $limit: parseInt(pageSize) },
            ])
                .exec();
            console.log('🚀 ~ UserService ~ User:', data);
            return data;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('An error occurred while retrieving users.');
        }
    }
    async findOne(id) {
        try {
            const user = await this.userModel.findById(id).exec();
            if (!user) {
                throw new common_1.NotFoundException(`User with ID ${id} not found.`);
            }
            return user;
        }
        catch (error) {
            if (error.name === 'CastError') {
                throw new common_1.BadRequestException(`Invalid ID format: ${id}`);
            }
            throw new common_1.InternalServerErrorException('An error occurred while retrieving the user.');
        }
    }
    async create(createUserDto) {
        try {
            const existingUser = await this.userModel.findOne({
                email: createUserDto.email,
            });
            if (existingUser) {
                throw new common_1.ConflictException('Email is already in use');
            }
            createUserDto.password = await argon.hash(createUserDto.password);
            const createdUser = new this.userModel(createUserDto);
            const response = await createdUser.save();
            console.log('createdUser', createdUser);
            const { accessToken, refreshToken } = await this.auth.generateTokens(createdUser._id, createdUser.email);
            console.log('refreshToken', refreshToken, createdUser);
            await this.auth.updateRefreshToken(createdUser._id, refreshToken);
            return response;
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('An error occurred while creating the user.');
        }
    }
    async update(id, updateUserDto) {
        try {
            const updatedUser = await this.userModel
                .findByIdAndUpdate(id, updateUserDto, { new: true })
                .exec();
            if (!updatedUser) {
                throw new common_1.NotFoundException(`User with ID ${id} not found.`);
            }
            return updatedUser;
        }
        catch (error) {
            if (error.name === 'CastError') {
                throw new common_1.BadRequestException(`Invalid ID format: ${id}`);
            }
            throw new common_1.InternalServerErrorException('An error occurred while updating the user.');
        }
    }
    async remove(id) {
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
            if (!deletedUser) {
                throw new common_1.NotFoundException(`User with ID ${id} not found.`);
            }
            return deletedUser;
        }
        catch (error) {
            if (error.name === 'CastError') {
                throw new common_1.BadRequestException(`Invalid ID format: ${id}`);
            }
            throw new common_1.InternalServerErrorException('An error occurred while deleting the user.');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.service.js.map