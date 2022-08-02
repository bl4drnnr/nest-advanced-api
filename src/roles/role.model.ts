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
import { User } from '../users/user.model';
import { UserRole } from '../user-roles/user-role.model';

interface RoleCreationAttribute {
  value: string;
  description: string;
}

@Table
export class Role extends Model<Role, RoleCreationAttribute> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique uuid of user record'
  })
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ApiProperty({
    example: 'Admin',
    description: 'User role'
  })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  value: string;

  @ApiProperty({
    example: 'Grant user access to all services',
    description: 'User role description'
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @BelongsToMany(() => User, () => UserRole)
  users: User[];
}
