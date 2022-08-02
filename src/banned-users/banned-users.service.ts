import { Injectable } from '@nestjs/common';
import { BannedUsersDto } from './dto/banned-users.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BannedUser } from './banned-users.model';
import { UserService } from '../users/user.service';

@Injectable()
export class BannedUsersService {
  constructor(
    @InjectModel(BannedUser) private bannedUsersRepository: typeof BannedUser,
    private userService: UserService
  ) {}

  async createBannedUser(dto: BannedUsersDto) {
    const { email, reason } = dto;
    const user = await this.userService.getUserByEmail(email);
    return this.bannedUsersRepository.create({
      reason,
      userId: user.id
    });
  }
}
