import { ApiProperty } from '@nestjs/swagger';

export class BannedUserDto {
  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  readonly email: string;

  @ApiProperty({
    example: 'Hacker',
    description: 'The reason of the ban'
  })
  readonly reason: string;
}
