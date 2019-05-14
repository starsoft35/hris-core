import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { createHash } from 'crypto';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class AuthService {
  private algorithm = 'sha512';
  private encodeHashAsBase64 = true;
  private iterations = 0;

  constructor(private readonly userService: UserService) {}

  async login(username, password): Promise<User> {
    const user = await this.userService.findByUsername(username);
    //user.token = this.encodePassword(password, user.salt);
    return user;
  }
}
