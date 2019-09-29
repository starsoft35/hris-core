import { Controller, Get, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from 'src/modules/user/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { BaseController } from 'src/core/controllers/base.contoller';
import { UserRole } from '../entities/user-role.entity';
import { UserRoleService } from '../services/user-role.service';

@Controller('api/' + UserRole.plural)
//@UseGuards(AuthGuard())
export class UserRolesController extends BaseController<UserRole> {
    constructor(private readonly userRoleService: UserRoleService) {
        super(userRoleService, UserRole);
    }
}