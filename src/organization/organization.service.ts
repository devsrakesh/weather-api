import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './entities/organization.entity';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name)
    private organizationModel: Model<Organization>,
  ) {}

  async create(
    createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    try {
      const organization = await this.organizationModel.create(
        createOrganizationDto,
      );
      return organization;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<{ isDeleted: boolean; msg: string }> {
    try {
      const org = await this.organizationModel.deleteOne({ _id: id });
      if (org.deletedCount === 1) {
        return { isDeleted: true, msg: 'Organization deleted successfully' };
      } else {
        throw new NotFoundException('Organization not found');
      }
    } catch (error) {
      throw error;
    }
  }

  async update(
    id: string,
    updateOrganizationDto: UpdateOrganizationDto,
  ): Promise<Organization> {
    try {
      const org = await this.organizationModel.findByIdAndUpdate(
        id,
        updateOrganizationDto,
        { new: true },
      );
      if (!org) {
        throw new NotFoundException('Organization not found');
      }
      return org;
    } catch (error) {
      throw error;
    }
  }

  async findAll(page: number, itemsPerPage: number): Promise<Organization[]> {
    try {
      const skipCount = (page - 1) * itemsPerPage;
      const totalOrg = await this.organizationModel.countDocuments({});
      const orgData = await this.organizationModel
        .find({})
        .skip(skipCount)
        .limit(itemsPerPage)
        .sort({ name: 1 });
      return orgData;
    } catch (error) {
      throw error;
    }
  }

  async findById(id: string): Promise<Organization> {
    try {
      const org = await this.organizationModel.findById(id);
      if (!org) {
        throw new NotFoundException('Organization not found');
      }
      return org;
    } catch (error) {
      throw error;
    }
  }
}
