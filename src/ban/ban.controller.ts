import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BanService } from './ban.service';
import { BanDto } from './dto/ban.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BanUser } from './ban.model';
import { JwtGuard } from '../guards/jwt.guard';
import { RoleGuard } from '../guards/role.guard';
import { Roles } from '../decorators/role.decorator';

@ApiTags('Bans')
@Controller('user/ban')
export class BanController {
  constructor(private bannedUsersService: BanService) {}

  @ApiOperation({ summary: 'Create ban record' })
  @ApiResponse({ status: 200, type: BanUser })
  @UseGuards(JwtGuard, RoleGuard)
  @Roles('ADMIN')
  @Post()
  async banUser(@Body() bannedUsersDto: BanDto) {
    return this.bannedUsersService.banUser(bannedUsersDto);
  }

  @ApiOperation({ summary: 'Get all banned users' })
  @ApiResponse({ status: 200 })
  @UseGuards(JwtGuard, RoleGuard)
  @Roles('ADMIN')
  @Get()
  async getAllBannedUsers() {
    return this.bannedUsersService.getAllBannedUsers();
  }
}
