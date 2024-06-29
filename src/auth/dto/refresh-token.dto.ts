import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'User ID',
    example: '60c72b2f9b1e8b4f44d69b7a',
  })
  @IsMongoId()
  userId: string;

  @ApiProperty({
    description: 'User refresh token',
    example: 'password123',
  })
  @IsString()
  refreshToken: string;
}
