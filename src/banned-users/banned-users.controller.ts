import { Body, Controller, Post } from "@nestjs/common";
import { BannedUsersService } from './banned-users.service';
import { BannedUsersDto } from './dto/banned-users.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { BannedUser } from './banned-users.model';

@Controller('banned-users')
export class BannedUsersController {
  constructor(private bannedUsersService: BannedUsersService) {}

  @ApiOperation({ summary: 'Create ban record' })
  @ApiResponse({ status: 200, type: BannedUser })
  @Post()
  async createBannedUser(@Body() bannedUsersDto: BannedUsersDto) {
    return this.bannedUsersService.createBannedUser(bannedUsersDto);
  }
}
