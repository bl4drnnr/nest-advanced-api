import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './users/user.module';
import { User } from './users/user.model';
import { RoleModule } from './roles/role.module';
import { Role } from './roles/role.model';
import { UserRoleModule } from './user-roles/user-role.module';
import { UserRole } from './user-roles/user-role.model';
import { BannedUserModule } from './banned-users/banned-user.module';
import { BannedUser } from './banned-users/banned-user.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      models: [User, Role, UserRole, BannedUser],
      autoLoadModels: true
    }),
    UserModule,
    RoleModule,
    UserRoleModule,
    BannedUserModule
  ]
})
export class AppModule {}
