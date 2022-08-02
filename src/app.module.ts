import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './users/user.module';
import { User } from './users/user.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/role.model';
import { UserRoleModule } from './user-roles/user-role.module';
import { UserRole } from './user-roles/user-role.model';
import { BannedUsersModule } from './banned-users/banned-users.module';
import { BannedUser } from './banned-users/banned-users.model';

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
    RolesModule,
    UserRoleModule,
    BannedUsersModule
  ]
})
export class AppModule {}
