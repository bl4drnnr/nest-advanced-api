import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RoleDto } from './dto/role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './role.model';

@Controller('roles')
export class RolesController {
  constructor(private rolesService: RolesService) {}

  @ApiOperation({ summary: 'Create new role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() dto: RoleDto) {
    return this.rolesService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get role by its name' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByName(@Param('value') value: string) {
    return this.rolesService.getRoleByName(value);
  }
}
