import { Module } from '@nestjs/common';
import { BanUserController } from './ban-user.controller';
import { BanUserService } from './ban-user.service';
import { UserModule } from '../users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '../users/user.model';
import { Role } from '../roles/role.model';
import { UserRole } from '../user-roles/user-role.model';
import { BanUser } from './ban-user.model';

@Module({
  controllers: [BanUserController],
  providers: [BanUserService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRole, BanUser]),
    UserModule
  ]
})
export class BanUserModule {}
