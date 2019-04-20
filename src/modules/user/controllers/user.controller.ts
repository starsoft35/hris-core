import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/database/entities/user';
import { AuthGuard } from '@nestjs/passport';
import { ModelController } from 'src/core/model.contoller';

@Controller('users')
//@UseGuards(AuthGuard())
export class UsersController extends ModelController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
  get plural() {
    return 'users';
  }
}