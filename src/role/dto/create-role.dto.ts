// create-role.dto.ts
import { IsNotEmpty, IsString, IsEnum, ArrayMinSize, ArrayMaxSize, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { PermissionDto } from './permission.dto';

export class CreateRoleDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({})
  @IsString()
  role: string;

  @ApiProperty({ type: [PermissionDto] })
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PermissionDto)
  permissions: PermissionDto[];
}
