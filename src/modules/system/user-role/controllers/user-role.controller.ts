import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../../user/services/user.service';
import { User } from 'src/modules/system/user/entities/user.entity';
import { BaseController } from 'src/core/controllers/base.contoller';
import { UserRole } from '../entities/user-role.entity';

@Controller('api/' + UserRole.plural)
// @UseGuards(AuthGuard())
export class UserRoleController extends BaseController<User> {
    constructor(private readonly userService: UserService) {
        super(userService, User);
    }
}
