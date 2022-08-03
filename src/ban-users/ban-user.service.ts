import { Injectable } from '@nestjs/common';
import { BanUserDto } from './dto/ban-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BanUser } from './ban-user.model';
import { UserService } from '../users/user.service';

@Injectable()
export class BanUserService {
  constructor(
    @InjectModel(BanUser) private bannedUsersRepository: typeof BanUser,
    private userService: UserService
  ) {}

  async createBannedUser(dto: BanUserDto) {
    const { email, reason } = dto;
    const user = await this.userService.getUserByEmail(email);
    return this.bannedUsersRepository.create({
      reason,
      userId: user.id
    });
  }
}
