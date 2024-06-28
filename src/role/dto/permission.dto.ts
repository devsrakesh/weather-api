// permission.dto.ts
import { IsString, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CRUDPermission } from '../enum/permission.enum';

export class PermissionDto {
  @ApiProperty()
  @IsString()
  resource: string;

  @ApiProperty({ enum: CRUDPermission, isArray: true })
  @IsEnum(CRUDPermission, { each: true })
  actions: CRUDPermission[];
}
