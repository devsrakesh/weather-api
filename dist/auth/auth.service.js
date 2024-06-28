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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_entity_1 = require("../user/entity/user.entity");
let AuthService = class AuthService {
    constructor(userModel, jwt, config) {
        this.userModel = userModel;
        this.jwt = jwt;
        this.config = config;
    }
    async login(dto) {
        const user = await this.userModel.findOne({ email: dto.email });
        if (!user) {
            throw new common_1.ForbiddenException('Unauthorized User');
        }
        const pwMatches = await argon.verify(user.password, dto.password);
        if (!pwMatches) {
            throw new common_1.ForbiddenException('Credential incorrect');
        }
        const { accessToken, refreshToken } = await this.generateTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, refreshToken);
        return {
            email: user.email,
            _id: user._id,
            accessToken,
            refreshToken,
        };
    }
    async register(dto) {
        const hash = await argon.hash(dto.password);
        const oldUser = await this.userModel.findOne({ email: dto.email });
        if (oldUser) {
            throw new common_1.ForbiddenException('Email is already in use');
        }
        dto.password = hash;
        const user = await new this.userModel(dto).save();
        const { accessToken, refreshToken } = await this.generateTokens(user.id, user.email);
        await this.updateRefreshToken(user.id, refreshToken);
        return {
            email: user.email,
            _id: user._id,
            accessToken,
            refreshToken,
        };
    }
    async generateTokens(userId, email) {
        const payload = { sub: userId, email };
        const accessToken = await this.jwt.signAsync(payload, {
            expiresIn: '1m',
            secret: this.config.get('JWT_SECRET') || 'abc',
        });
        const refreshToken = await this.jwt.signAsync(payload, {
            expiresIn: '3m',
            secret: this.config.get('JWT_REFRESH_SECRET') || 'abc',
        });
        return { accessToken, refreshToken };
    }
    async updateRefreshToken(userId, refreshToken) {
        const hashedRefreshToken = await argon.hash(refreshToken);
        await this.userModel.findByIdAndUpdate(userId, {
            refreshToken: hashedRefreshToken,
        });
    }
    async refreshToken(id, refreshToken) {
        const user = await this.userModel.findById(id);
        if (!user || !user.refreshToken) {
            console.log('1', user);
            throw new common_1.ForbiddenException('Access Denied');
        }
        const refreshTokenMatches = await argon.verify(user.refreshToken, refreshToken);
        if (!refreshTokenMatches) {
            console.log('2', user);
            throw new common_1.ForbiddenException('Access Denied');
        }
        const { accessToken, refreshToken: newRefreshToken } = await this.generateTokens(user._id, user.email);
        await this.updateRefreshToken(user._id, newRefreshToken);
        return { accessToken, refreshToken: newRefreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map