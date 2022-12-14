import {
  BelongsToMany,
  Column,
  DataType,
  Default,
  HasOne,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { BanUser } from '../ban/ban.model';

interface UserCreationAttribute {
  email: string;
  password: string;
}

@Table
export class User extends Model<User, UserCreationAttribute> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique uuid of record'
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

  @BelongsToMany(() => Role, () => UserRole)
  roles: Role[];

  @HasOne(() => BanUser)
  ban: BanUser;
}
