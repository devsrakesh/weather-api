import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
  @ApiProperty({
    description: 'User password',
    example: 'I',
  })
  userId: string;
  @ApiProperty({
    description: 'User password',
    example: 'password123',
  })
  refreshToken: string;
}
