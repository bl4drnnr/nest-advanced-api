import { Body, Controller, Post } from '@nestjs/common';
import { BannedUserService } from './banned-user.service';
import { BannedUserDto } from './dto/banned-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BannedUser } from './banned-user.model';

@Controller('banned-user')
export class BannedUserController {
  constructor(private bannedUsersService: BannedUserService) {}

  @ApiOperation({ summary: 'Create ban record' })
  @ApiResponse({ status: 200, type: BannedUser })
  @Post()
  async createBannedUser(@Body() bannedUsersDto: BannedUserDto) {
    return this.bannedUsersService.createBannedUser(bannedUsersDto);
  }
}
