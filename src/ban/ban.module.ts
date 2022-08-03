import { Module } from '@nestjs/common';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';
import { UserModule } from '../users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { BanUser } from './ban.model';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [BanController],
  providers: [BanService],
  imports: [SequelizeModule.forFeature([BanUser]), UserModule, AuthModule]
})
export class BanModule {}
