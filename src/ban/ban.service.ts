import { Injectable } from '@nestjs/common';
import { BanDto } from './dto/ban.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BanUser } from './ban.model';
import { UserService } from '../users/user.service';

@Injectable()
export class BanService {
  constructor(
    @InjectModel(BanUser) private bannedUsersRepository: typeof BanUser,
    private userService: UserService
  ) {}

  async createBannedUser(dto: BanDto) {
    const { email, reason } = dto;
    const user = await this.userService.getUserByEmail(email);
    return this.bannedUsersRepository.create({
      reason,
      userId: user.id
    });
  }
}
