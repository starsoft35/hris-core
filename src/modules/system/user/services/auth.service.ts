import { Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { User } from 'src/modules/system/user/entities/user.entity';
import { UserService } from './user.service';
import { convertUidsToIds } from '../../../../core/utilities/convertIds';

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

  async getUserByUid(uid: string): Promise<User> {
    return convertUidsToIds(await this.userService.findOneByUid(uid));
  }
}
