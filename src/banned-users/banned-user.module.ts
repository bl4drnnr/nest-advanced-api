import { Module } from '@nestjs/common';
import { BannedUserController } from './banned-user.controller';
import { BannedUserService } from './banned-user.service';
import { UserModule } from '../users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { BannedUser } from './banned-user.model';

@Module({
  controllers: [BannedUserController],
  providers: [BannedUserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, BannedUser]),
    UserModule
  ]
})
export class BannedUserModule {}
