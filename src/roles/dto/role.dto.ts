import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty({
    example: 'Admin',
    description: 'Name of user role'
  })
  readonly value: string;

  @ApiProperty({
    example: 'Grant user access to all services',
    description: 'Description of the role'
  })
  readonly description: string;
}
