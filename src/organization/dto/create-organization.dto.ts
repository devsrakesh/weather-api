import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsOptional,
  IsEmail,
  IsPhoneNumber,
  IsNotEmpty,
  IsUrl,
} from 'class-validator';

export class CreateOrganizationDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: 'educational' })
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsPhoneNumber()
  contactNo: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  city: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  state: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  zipcode: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  logoUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsUrl()
  orgUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  headName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  headContact: string;

  @ApiProperty()
  @IsOptional()
  @IsEmail()
  headEmail: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  headPosition: string;

  @ApiProperty({ default: 'active' })
  @IsOptional()
  @IsString()
  status: string;
}
