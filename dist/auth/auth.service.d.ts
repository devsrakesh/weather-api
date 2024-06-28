/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { UpdateAuthDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Model, Types } from 'mongoose';
import { User } from 'src/user/entity/user.entity';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
export declare class AuthService {
    private userModel;
    private jwt;
    private config;
    constructor(userModel: Model<User>, jwt: JwtService, config: ConfigService);
    login(dto: UpdateAuthDto): Promise<{
        email: string;
        _id: Types.ObjectId;
        accessToken: string;
        refreshToken: string;
    }>;
    register(dto: CreateUserDto): Promise<{
        email: string;
        _id: Types.ObjectId;
        accessToken: string;
        refreshToken: string;
    }>;
    generateTokens(userId: Types.ObjectId, email: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    updateRefreshToken(userId: Types.ObjectId, refreshToken: string): Promise<void>;
    refreshToken(id: Types.ObjectId, refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}