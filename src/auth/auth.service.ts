import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import * as argon from 'argon2';
import { Model, Types } from 'mongoose';
import { User } from 'src/user/entity/user.entity';
import { RefreshTokenDto, UpdateAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async login(dto: UpdateAuthDto) {
    const user = await this.userModel.findOne({ email: dto.email });
    if (!user) {
      throw new ForbiddenException('Unauthorized User');
    }
    const pwMatches = await argon.verify(user.password, dto.password);
    if (!pwMatches) {
      throw new ForbiddenException('Credential incorrect');
    }

    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      email: user.email,
      _id: user._id,
      accessToken,
      refreshToken,
    };
  }

  async register(dto: UpdateAuthDto) {
    const hash = await argon.hash(dto.password);
    const oldUser = await this.userModel.findOne({ email: dto.email });
    if (oldUser) {
      throw new ForbiddenException('Email is already in use');
    }
    dto.password = hash;
    const user = await new this.userModel(dto).save();

    const { accessToken, refreshToken } = await this.generateTokens(
      user.id,
      user.email,
    );
    await this.updateRefreshToken(user.id, refreshToken);

    return {
      email: user.email,
      _id: user._id,
      accessToken,
      refreshToken,
    };
  }

  async generateTokens(userId: Types.ObjectId, email: string) {
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

  async updateRefreshToken(userId: Types.ObjectId, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    await this.userModel.findByIdAndUpdate(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async refreshToken(dto: RefreshTokenDto) {
    const { userId, refreshToken } = dto;

    // Convert to ObjectId
    const objectId = new Types.ObjectId(userId);

    console.log(objectId, refreshToken);

    const user = await this.userModel.findById(userId);

    if (!user || !user.refreshToken) {
      console.log('1', user);
      throw new ForbiddenException('Access Denied');
    }

    const refreshTokenMatches = await argon.verify(
      user.refreshToken,
      refreshToken,
    );
    if (!refreshTokenMatches) {
      console.log('2', user);
      throw new ForbiddenException('Access Denied');
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await this.generateTokens(user._id, user.email);
    await this.updateRefreshToken(user._id, newRefreshToken);

    return { accessToken, refreshToken: newRefreshToken };
  }
}
