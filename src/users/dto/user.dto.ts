import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  readonly email: string;

  @ApiProperty({
    example: '1@qWasdf',
    description: 'User password'
  })
  readonly password: string;
}
