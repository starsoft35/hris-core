import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from '../system/user/controllers/auth.controller';
import { UsersController } from '../system/user/controllers/user.controller';
import { UserGroup } from '../system/user-group/entities/user-group.entity';
import { UserRole } from '../system/user-role/entities/user-role.entity';
import { UserSettings } from '../system/user/entities/user-settings.entity';
import { User } from '../system/user/entities/user.entity';
import { AuthService } from '../system/user/services/auth.service';
import { UserService } from '../system/user/services/user.service';
import { AppAuthGuard } from '../system/user/guards/roles.guard';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([User, UserGroup, UserRole, UserSettings]),
  ],
  controllers: [AuthController, UsersController],
  providers: [UserService, AuthService, AppAuthGuard],
})
export class UserModule {}
