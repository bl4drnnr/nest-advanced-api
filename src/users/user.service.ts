import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}

  async createUser(dto: UserDto) {
    return await this.userRepository.create(dto);
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
