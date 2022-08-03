import { Body, Controller, Post } from '@nestjs/common';
import { BanService } from './ban.service';
import { BanDto } from './dto/ban.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BanUser } from './ban.model';

@ApiTags('Bans')
@Controller('user/ban')
export class BanController {
  constructor(private bannedUsersService: BanService) {}

  @ApiOperation({ summary: 'Create ban record' })
  @ApiResponse({ status: 200, type: BanUser })
  @Post()
  async createBannedUser(@Body() bannedUsersDto: BanDto) {
    return this.bannedUsersService.createBannedUser(bannedUsersDto);
  }
}
