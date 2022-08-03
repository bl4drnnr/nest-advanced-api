import {
  CanActivate,
  ExecutionContext, HttpException, HttpStatus,
  Injectable,
  UnauthorizedException
} from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/role.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private jwtService: JwtService, private refrector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.refrector.getAllAndOverride(ROLES_KEY, [
        context.getHandler,
        context.getClass
      ]);

      if (!requiredRoles) {
        return true;
      }
      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token)
        throw new HttpException('forbidden', HttpStatus.FORBIDDEN);

      req.user = this.jwtService.verify(token);
      return req.user.roles.some((role) => requiredRoles.include(role.value));
    } catch (e) {
      throw new HttpException('forbidden', HttpStatus.FORBIDDEN);
    }
  }
}
