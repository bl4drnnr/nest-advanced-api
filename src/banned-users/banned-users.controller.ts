import { Controller } from '@nestjs/common';
import { BannedUsersService } from './banned-users.service';
import { BannedUsersDto } from './dto/banned-users.dto';

@Controller('banned-users')
export class BannedUsersController {
  constructor(private bannedUsersService: BannedUsersService) {}

  async createBannedUser(dto: BannedUsersDto) {
    //
  }
}
