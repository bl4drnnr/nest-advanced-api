import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }

  @Get()
  getAll() {
    return this.userService.getAllUsers();
  }
}
