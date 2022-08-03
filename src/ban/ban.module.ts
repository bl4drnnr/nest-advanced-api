import { Module } from '@nestjs/common';
import { BanController } from './ban.controller';
import { BanService } from './ban.service';
import { UserModule } from '../users/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { BanUser } from './ban.model';

@Module({
  controllers: [BanController],
  providers: [BanService],
  imports: [SequelizeModule.forFeature([BanUser]), UserModule]
})
export class BanModule {}
