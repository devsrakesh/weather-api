import { Body, Controller, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { Response } from 'src/common/interceptor/response.interface';
import { Types } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiOperation({ summary: 'User registration' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, description: 'User registered successfully' })
  async signup(@Body() dto: CreateUserDto): Promise<
    Response<{
      email: string;
      _id: Types.ObjectId;
      accessToken: string;
      refreshToken: string;
    }>
  > {
    const data = await this.authService.register(dto);
    return { data, message: 'User registered successfully' };
  }

  @Post('login')
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: UpdateAuthDto })
  @ApiResponse({ status: 200, description: 'User logged in successfully' })
  async signin(@Body() dto: UpdateAuthDto): Promise<
    Response<{
      email: string;
      _id: Types.ObjectId;
      accessToken: string;
      refreshToken: string;
    }>
  > {
    const data = await this.authService.login(dto);
    return { data, message: 'User logged in successfully' };
  }

  @Post('refresh-token')
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiBody({ type: RefreshTokenDto })
  @ApiResponse({ status: 200, description: 'Token refreshed successfully' })
  async refreshToken(@Body() dto: RefreshTokenDto): Promise<
    Response<{
      accessToken: string;
      refreshToken: string;
    }>
  > {
    const userId = new Types.ObjectId(dto.userId); // Ensure userId is cast to Types.ObjectId
    const data = await this.authService.refreshToken(userId, dto.refreshToken);
    return { data, message: 'Token refreshed successfully' };
  }
}
