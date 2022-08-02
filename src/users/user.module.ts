import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [SequelizeModule.forFeature([User, Role, UserRole]), RolesModule]
})
export class UserModule {}
