import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { BaseService } from '../../../core/services/base.service';

@Injectable()
export class UserService extends BaseService<User> {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  async findOneByToken(token): Promise<User> {
    return await this.userRepository.findOne({
      where: { confirmation_token: token },
    });
  }
  async findByUsername(username): Promise<User> {
    let user = await this.userRepository.findOne({
      where: { username: username },
    });
    return user;
  }
}
