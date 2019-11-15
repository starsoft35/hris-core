import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Session,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/modules/system/user/entities/user.entity';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { SessionGuard } from '../guards/session.guard';
import { ApiResult } from 'src/core/interfaces';
import { UserAuthority } from 'dist/modules/system/user-authority/entities/user-authority.entity';

@Controller('api/me')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
  @UseGuards(SessionGuard)
  async me(@Req() request): Promise<ApiResult> {
    const result = await this.authService.getUserByUid(
      request.session.user.uid,
    );
    if (result) {
      return result;
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User was not found.',
        response: {
          responseType: 'ErrorReport',
        },
      };
    }
  }
  @Get('authorization')
  @UseGuards(SessionGuard)
  async authorization(@Req() request): Promise<ApiResult> {
    const result:User = await this.authService.getUserByUid(
      request.session.user.uid,
    );
    //result.userRoles.map()
    const allAuthorities = [];
    result.userRoles.map(role => role.userAuthorities).forEach((authorities)=>{
      authorities.forEach(authority => {
        allAuthorities.push(authority.name);
      });
    });
    if (result) {
      return allAuthorities;
    } else {
      return {
        httpStatus: 'Not Found',
        httpStatusCode: 404,
        status: 'ERROR',
        message: 'User was not found.',
        response: {
          responseType: 'ErrorReport',
        },
      };
    }
  }
}
