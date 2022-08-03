import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { RoleService } from '../roles/role.service';
import { Role } from '../roles/role.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService
  ) {}

  async createUser(dto: UserDto) {
    const user = await this.userRepository.create(dto);
    const role = await this.roleService.getRoleByName('USER');
    await user.$set('roles', [role.id]);
    user.roles = [role];

    return user;
  }

  async getAllUsers() {
    return await this.userRepository.findAll({ include: Role });
  }

  async getUserByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      include: Role
    });
  }
}
