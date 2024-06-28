import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
  Query,
  InternalServerErrorException,
  Patch,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { ResponseInterceptor } from 'src/common/interceptor/response.interceptor';
import { Response } from 'src/common/interceptor/response.interface';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users with pagination and sorting' })
  @ApiQuery({ name: 'pageSize', type: Number, required: true })
  @ApiQuery({ name: 'pageNumber', type: Number, required: true })
  @ApiQuery({
    name: 'sortBy',
    type: String,
    required: false,
    enum: ['createdAt', 'updatedAt'],
  })
  @ApiQuery({
    name: 'sortOrder',
    type: String,
    required: false,
    enum: ['asc', 'desc'],
  })
  @ApiOkResponse({
    description: 'List of users retrieved successfully',
    type: User,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No users found' })
  @ApiInternalServerErrorResponse({ description: 'Internal server error' })
  async findAll(
    @Query('pageSize') pageSize: string,
    @Query('pageNumber') pageNumber: string,
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
  ): Promise<Response<User[]>> {
    try {
      const users = await this.userService.findAll(
        pageSize,
        pageNumber,
        sortBy,
        sortOrder,
      );
      if (!users || users.length === 0) {
        throw new NotFoundException('No users found');
      }

      console.log('🚀 ~ UserController ~ users:', users);
      return { data: users, message: 'successfully get user' };
    } catch (error) {
      throw new InternalServerErrorException(
        'An error occurred while retrieving users.',
      );
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User details', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOne(@Param('id') id: string): Promise<Response<User>> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return { data: user, message: 'successfully get user' };
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({
    status: 201,
    description: 'User created successfully',
    type: User,
  })
  async create(@Body() createUserDto: CreateUserDto): Promise<Response<User>> {
    const data = await this.userService.create(createUserDto);
    return { data, message: 'User created Successfully' };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({
    status: 200,
    description: 'User updated successfully',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Response<User>> {
    const data = await this.userService.update(id, updateUserDto);
    return { data, message: 'User Updated successfully' };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', type: 'string', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 404, description: 'User not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.userService.remove(id);
  }
}
