import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from './providers/user.providers';
import { UserService } from './services/user.service';
import { UsersController } from './controllers/user.controller';
import { AuthService } from './services/auth.service';
import { HttpStrategy } from './services/http.strategy';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './controllers/auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'basic', session: true }),
    DatabaseModule,
  ],
  controllers: [AuthController, UsersController],
  providers: [...userProviders, UserService, AuthService, HttpStrategy],
})
export class UserModule {}