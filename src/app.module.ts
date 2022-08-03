import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserModule } from './users/user.module';
import { User } from './users/user.model';
import { RoleModule } from './roles/role.module';
import { Role } from './roles/role.model';
import { UserRole } from './user-roles/user-role.model';
import { BanModule } from './ban/ban.module';
import { BanUser } from './ban/ban.model';
import { AuthModule } from './auth/auth.module';

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
      models: [User, Role, UserRole, BanUser],
      autoLoadModels: true
    }),
    UserModule,
    RoleModule,
    BanModule,
    AuthModule
  ]
})
export class AppModule {}
