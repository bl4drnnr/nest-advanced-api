import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddRoleDto {
  @ApiProperty({
    example: 'Admin',
    description: 'Name of role'
  })
  @IsString({ message: 'has-to-be-string' })
  readonly value: string;

  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  @IsString({ message: 'has-to-be-string' })
  @IsEmail({}, { message: 'not-email' })
  readonly email: string;
}
