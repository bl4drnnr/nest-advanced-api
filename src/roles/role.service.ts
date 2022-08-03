import { Injectable } from '@nestjs/common';
import { RoleDto } from './dto/role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepository: typeof Role) {}

  async createRole(dto: RoleDto) {
    return await this.roleRepository.create(dto);
  }

  async getRoleByName(value: string) {
    return await this.roleRepository.findOne({ where: { value } });
  }
}
