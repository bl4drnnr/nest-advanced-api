import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto } from './dto/role.dto';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @Post()
  create(@Body() dto: RoleDto) {
    return this.rolesService.createRole(dto);
  }

  @Get('/:value')
  getRoleByName(@Param('value') value: string) {
    return this.rolesService.getRoleByName(value);
  }
}
