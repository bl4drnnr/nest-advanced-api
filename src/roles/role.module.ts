import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from '../users/user.model';
import { UserRole } from '../user-roles/user-role.model';
import { BanUser } from '../ban-users/ban-user.model';

@Module({
  providers: [RoleService],
  controllers: [RoleController],
  imports: [SequelizeModule.forFeature([Role, User, UserRole, BanUser])],
  exports: [RoleService]
})
export class RoleModule {}
