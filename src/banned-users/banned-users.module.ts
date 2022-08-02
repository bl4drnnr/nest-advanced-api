import { Module } from '@nestjs/common';
import { BannedUsersController } from './banned-users.controller';
import { BannedUsersService } from './banned-users.service';
import { UserModule } from '../users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { BannedUser } from './banned-users.model';

@Module({
  controllers: [BannedUsersController],
  providers: [BannedUsersService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, BannedUser]),
    UserModule
  ]
})
export class BannedUsersModule {}
