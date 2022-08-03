import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  @IsString({ message: 'has-to-be-string' })
  @IsEmail({}, { message: 'not-email' })
  readonly email: string;

  @ApiProperty({
    example: '1@qWasdf',
    description: 'User password'
  })
  @IsString({ message: 'has-to-be-string' })
  @Length(8, 32, { message: 'min-8-max-32' })
  readonly password: string;
}
