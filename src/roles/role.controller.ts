import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './dto/role.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './role.model';

@Controller('role')
export class RoleController {
  constructor(private rolesService: RoleService) {}

  @ApiOperation({ summary: 'Create new role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  create(@Body() roleDto: RoleDto) {
    return this.rolesService.createRole(roleDto);
  }

  @ApiOperation({ summary: 'Get role by its name' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getRoleByName(@Param('value') value: string) {
    return this.rolesService.getRoleByName(value);
  }
}
