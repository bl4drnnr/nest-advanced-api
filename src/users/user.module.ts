import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { RoleModule } from '../roles/role.module';
import { BanUser } from '../ban/ban.model';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, BanUser]),
    RoleModule
  ],
  exports: [UserService]
})
export class UserModule {}
