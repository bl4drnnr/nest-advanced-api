import {
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table
} from "sequelize-typescript";
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/user.model';

interface BanUserAttribute {
  userId: string;
  reason: string;
}

@Table
export class BanUser extends Model<BanUser, BanUserAttribute> {
  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'Unique uuid of record'
  })
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  id: string;

  @ApiProperty({
    example: '123e4567-e89b-12d3-a456-426614174000',
    description: 'User id reference'
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @BelongsTo(() => User)
  user: User;

  @ApiProperty({
    example: 'Hacker',
    description: 'Banned reason'
  })
  @Column({ type: DataType.STRING, allowNull: false })
  reason: string;
}
