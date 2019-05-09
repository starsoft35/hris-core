import { Controller, Get, Req, Res } from '@nestjs/common';
import { User } from 'src/modules/user/entities/user';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('login')
  async login(@Res() response: Response, @Req() request: Request): Promise<User> {
    let user = await this.authService.login('vincentminde', 'minde2016');
    response.header('Authorization', 'Bearer ' + user.confirmation_token);
    response.send(user);
    return user;
  }
}