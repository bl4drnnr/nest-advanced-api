import {
  BelongsToMany,
  Column,
  DataType,
  Default,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/role.model';

interface UserCreationAttribute {
  email: string;
  password: string;
}

@Table
export class User extends Model<User, UserCreationAttribute> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique uuid of user record'
  })
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ApiProperty({
    example: 'user@mail.domain',
    description: 'User email'
  })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @ApiProperty({
    example: '1@qWasdf',
    description: 'User password'
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'User ban status'
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: string;

  @ApiProperty({
    example: 'Hacker',
    description: 'User ban reason'
  })
  @Column({ type: DataType.STRING, allowNull: true })
  reason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
