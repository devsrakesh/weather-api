// role.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  Query,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { RoleService } from './role.service';

import {
  ApiTags,
  ApiResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiQuery,
  ApiOkResponse,
} from '@nestjs/swagger';
import { Role } from './entity/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { ResponseInterceptor } from 'src/common/interceptor/response.interceptor';
import { Response } from 'src/interceptor/response.interface';

@ApiTags('roles')
@Controller('roles')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Role created successfully',
    type: Role,
  })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  async create(@Body() createRoleDto: CreateRoleDto): Promise<Response<Role>> {
    const data = await this.roleService.create(createRoleDto);
    return { data, message: 'role created successfully' };
  }

  @Get()
  @ApiOperation({ summary: 'Get all roles with pagination and sorting' })
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
    description: 'List of roles retrieved successfully',
    type: Role,
    isArray: true,
  })
  @ApiNotFoundResponse({ description: 'No roles found' })
  async findAll(
    @Query('pageSize') pageSize: string,
    @Query('pageNumber') pageNumber: string,
    @Query('sortBy') sortBy: string = 'createdAt',
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
  ): Promise<Response<Role[]>> {
    const roles = await this.roleService.findAll(
      pageSize,
      pageNumber,
      sortBy,
      sortOrder,
    );
    if (!roles || roles.length === 0) {
      throw new NotFoundException('No roles found');
    }
    return { data: roles, message: 'retrieve all roles' };
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Role retrieved successfully',
    type: Role,
  })
  @ApiNotFoundResponse({ description: 'Role not found' })
  async findOne(@Param('id') id: string): Promise<Response<Role>> {
    const data = await this.roleService.findOne(id);
    return { data, message: 'retrieved role successfully ' };
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Role updated successfully',
    type: Role,
  })
  @ApiNotFoundResponse({ description: 'Role not found' })
  @ApiBadRequestResponse({ description: 'Validation failed' })
  async update(
    @Param('id') id: string,
    @Body() updateRoleDto: UpdateRoleDto,
  ): Promise<Response<Role>> {
    const data = await this.roleService.update(id, updateRoleDto);
    return { data, message: 'updated role successfully' };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Role deleted successfully',
  })
  @ApiNotFoundResponse({ description: 'Role not found' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.roleService.remove(id);
  }
}
