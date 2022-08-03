import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RoleDto {
  @ApiProperty({
    example: 'Admin',
    description: 'Name of user role'
  })
  @IsString({ message: 'has-to-be-string' })
  readonly value: string;

  @ApiProperty({
    example: 'Grant user access to all services',
    description: 'User role description'
  })
  @IsString({ message: 'has-to-be-string' })
  readonly description: string;
}
