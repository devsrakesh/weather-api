import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
  Patch,
} from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { Organization } from './entities/organization.entity';
import { Response } from 'src/common/interceptor/response.interface';

@ApiTags('organizations')
@Controller('organizations')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post()
  @ApiCreatedResponse({
    description: 'The organization has been successfully created.',
    type: Organization,
  })
  @ApiBody({ type: CreateOrganizationDto })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async create(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Response<Organization>> {
    const data = await this.organizationService.create(createOrganizationDto);
    return { data, message: 'successfully created ' };
  }

  @Delete(':id')
  @ApiOkResponse({
    description: 'The organization has been successfully deleted.',
  })
  @ApiNotFoundResponse({ description: 'Organization not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async delete(@Param('id') id: string): Promise<void> {
    await this.organizationService.delete(id);
  }

  @Patch(':id')
  @ApiOkResponse({
    description: 'The organization has been successfully updated.',
    type: Organization,
  })
  @ApiBody({ type: CreateOrganizationDto })
  @ApiNotFoundResponse({ description: 'Organization not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async update(
    @Param('id') id: string,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationService.update(id, updateOrganizationDto);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false })
  @ApiQuery({ name: 'itemsPerPage', required: false })
  @ApiOkResponse({
    description: 'List of organizations retrieved successfully.',
  })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async findAll(
    @Query('page') page: number,
    @Query('itemsPerPage') itemsPerPage: number,
  ): Promise<Response<Organization[]>> {
    const data = await this.organizationService.findAll(page, itemsPerPage);
    return { data, message: 'retrieved all organization' };
  }

  @Get(':id')
  @ApiOkResponse({
    description: 'Organization retrieved successfully.',
    type: Organization,
  })
  @ApiNotFoundResponse({ description: 'Organization not found' })
  @ApiInternalServerErrorResponse({ description: 'Internal Server Error' })
  async findById(@Param('id') id: string): Promise<Response<Organization>> {
    const data = await this.organizationService.findById(id);
    return { data, message: 'get organization by id' };
  }
}
