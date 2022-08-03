import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../users/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_KEY,
      signOptions: {
        expiresIn: '24h'
      }
    })
  ]
})
export class AuthModule {}
