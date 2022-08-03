import { Body, Controller, Post } from '@nestjs/common';
import { BanUserService } from './ban-user.service';
import { BanUserDto } from './dto/ban-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BanUser } from './ban-user.model';

@Controller('banned-user')
export class BanUserController {
  constructor(private bannedUsersService: BanUserService) {}

  @ApiOperation({ summary: 'Create ban record' })
  @ApiResponse({ status: 200, type: BanUser })
  @Post()
  async createBannedUser(@Body() bannedUsersDto: BanUserDto) {
    return this.bannedUsersService.createBannedUser(bannedUsersDto);
  }
}
