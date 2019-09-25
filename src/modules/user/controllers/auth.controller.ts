import {
  Controller,
  Get,
  Req,
  Res,
  HttpStatus,
  Session,
  UseGuards,
} from '@nestjs/common';
import { User } from 'src/modules/user/entities/user.entity';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';
import { SessionGuard } from '../guards/session.guard';
import { ApiResult } from 'src/core/interfaces';

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
}
