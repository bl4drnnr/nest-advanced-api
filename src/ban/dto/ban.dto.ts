import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class BanDto {
  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  @IsString({ message: 'has-to-be-string' })
  @IsEmail({}, { message: 'not-email' })
  readonly email: string;

  @ApiProperty({
    example: 'Hacker',
    description: 'The reason of the ban'
  })
  @IsString({ message: 'has-to-be-string' })
  readonly reason: string;
}
