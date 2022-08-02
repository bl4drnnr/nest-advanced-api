import { Module } from '@nestjs/common';
import { BannedUsersController } from './banned-users.controller';
import { BannedUsersService } from './banned-users.service';

@Module({
  controllers: [BannedUsersController],
  providers: [BannedUsersService]
})
export class BannedUsersModule {}
