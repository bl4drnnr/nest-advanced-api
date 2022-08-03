import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { UserDto } from '../users/dto/user.dto';
import { UserService } from '../users/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { User } from '../users/user.model';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) {}

  async login(userDto: UserDto) {
    const user = await this.validateUser(userDto);
    return this.generateToken(user);
  }

  async registration(userDto: UserDto) {
    const candidate = await this.userService.getUserByEmail(userDto.email);
    if (candidate)
      throw new HttpException('user-already-exists', HttpStatus.BAD_REQUEST);

    const hashPassword = await bcrypt.hash(userDto.password, 5);
    return await this.userService.createUser({
      ...userDto,
      password: hashPassword
    });
  }

  private generateToken(user: User) {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload, {
        secret: process.env.JWT_KEY
      })
    };
  }

  private async validateUser(userDto: UserDto) {
    const user = await this.userService.getUserByEmail(userDto.email);
    const passwordEquality = await bcrypt.compare(
      userDto.password,
      user.password
    );

    if (user && passwordEquality) {
      return user;
    }
    throw new UnauthorizedException({ message: 'wrong-data' });
  }
}
