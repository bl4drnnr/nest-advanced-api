import { Injectable } from '@nestjs/common';
import { BannedUsersDto } from './dto/banned-users.dto';

@Injectable()
export class BannedUsersService {
  async createBannedUser(dto: BannedUsersDto) {
    //
  }
}
