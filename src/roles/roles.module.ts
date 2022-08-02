import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './role.model';
import { User } from '../users/user.model';
import { UserRole } from '../user-roles/user-role.model';
import { BannedUser } from '../banned-users/banned-users.model';

@Module({
  providers: [RolesService],
  controllers: [RolesController],
  imports: [SequelizeModule.forFeature([Role, User, UserRole, BannedUser])],
  exports: [RolesService]
})
export class RolesModule {}
