import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './controllers/auth.controller';
import { UsersController } from './controllers/user.controller';
import { UserGroup } from './entities/user-group.entity';
import { UserRole } from './entities/user-role.entity';
import { UserSettings } from './entities/user-settings.entity';
import { User } from './entities/user.entity';
import { AuthService } from './services/auth.service';
import { HttpStrategy } from './services/http.strategy';
import { UserService } from './services/user.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    TypeOrmModule.forFeature([User, UserGroup, UserRole, UserSettings]),
  ],
  controllers: [AuthController, UsersController],
  providers: [UserService, AuthService, HttpStrategy],
})
export class UserModule {}
