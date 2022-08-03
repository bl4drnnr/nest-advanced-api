import { InjectModel } from '@nestjs/sequelize';
import { User } from './user.model';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { UserDto } from './dto/user.dto';
import { RoleService } from '../roles/role.service';
import { Role } from '../roles/role.model';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RoleService
  ) {}

  async createUser(userDto: UserDto) {
    const user = await this.userRepository.create(userDto);
    const role = await this.roleService.getRoleByName('ADMIN');
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

  async addRole(addRoleDto: AddRoleDto) {
    const user = await this.getUserByEmail(addRoleDto.email);
    const role = await this.roleService.getRoleByName(addRoleDto.value);

    if (role && user) {
      await user.$add('role', role.id);
      return addRoleDto;
    }
    throw new HttpException('no-role-or-user', HttpStatus.NOT_FOUND);
  }

  async banUser(banUserDto: BanUserDto) {
    const user = await this.getUserByEmail(banUserDto.email);
  }
}
