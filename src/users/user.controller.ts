import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.model';
import { JwtGuard } from '../guards/jwt.guard';
import { Roles } from '../decorators/role.decorator';
import { RoleGuard } from '../guards/role.guard';
import { AddRoleDto } from './dto/add-role.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Creating user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto, 'ADMIN');
  }

  @ApiOperation({ summary: 'Getting list of all users' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtGuard, RoleGuard)
  @Roles('ADMIN')
  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }

  @ApiOperation({ summary: 'Distribution of roles' })
  @ApiResponse({ status: 200, type: AddRoleDto })
  @UseGuards(JwtGuard, RoleGuard)
  @Roles('ADMIN')
  @Post('/role')
  addRole(@Body() addRoleDto: AddRoleDto) {
    return this.userService.addRole(addRoleDto);
  }
}
