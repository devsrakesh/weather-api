// role.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Role, RoleDocument } from './entity/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role.name) private roleModel: Model<RoleDocument>) {}

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    const createdRole = new this.roleModel(createRoleDto);
    return createdRole.save();
  }

  async findAll(
    pageSize: string,
    pageNumber: string,
    sortBy: string = 'createdAt',
    sortOrder: 'asc' | 'desc' = 'asc',
  ): Promise<Role[]> {
    try {
      const skip = (parseInt(pageNumber) - 1) * parseInt(pageSize);
      const limit = pageSize;

      const roles = await this.roleModel
        .aggregate([
          { $sort: { [sortBy]: sortOrder === 'asc' ? 1 : -1 } },
          { $skip: skip },
          { $limit: parseInt(limit) },
        ])
        .exec();

      if (!roles || roles.length === 0) {
        throw new NotFoundException('No roles found');
      }

      return roles;
    } catch (error) {
      throw new Error(`Failed to fetch roles: ${error.message}`);
    }
  }

  async findOne(id: string): Promise<Role> {
    const role = await this.roleModel.findById(id);
    if (!role) {
      throw new NotFoundException('Role not found');
    }
    return role;
  }

  async update(id: string, updateRoleDto: UpdateRoleDto): Promise<Role> {
    const updatedRole = await this.roleModel.findByIdAndUpdate(
      id,
      updateRoleDto,
      { new: true },
    );
    if (!updatedRole) {
      throw new NotFoundException('Role not found');
    }
    return updatedRole;
  }

  async remove(id: string): Promise<void> {
    const result = await this.roleModel.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      throw new NotFoundException('Role not found');
    }
  }
}
