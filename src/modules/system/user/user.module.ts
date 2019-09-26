import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy: 'basic', session: true }),
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule { }
