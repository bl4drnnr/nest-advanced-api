import { Injectable } from '@nestjs/common';
import { BannedUserDto } from './dto/banned-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BannedUser } from './banned-user.model';
import { UserService } from '../users/user.service';

@Injectable()
export class BannedUserService {
  constructor(
    @InjectModel(BannedUser) private bannedUsersRepository: typeof BannedUser,
    private userService: UserService
  ) {}

  async createBannedUser(dto: BannedUserDto) {
    const { email, reason } = dto;
    const user = await this.userService.getUserByEmail(email);
    return this.bannedUsersRepository.create({
      reason,
      userId: user.id
    });
  }
}
