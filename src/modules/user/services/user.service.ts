import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../../database/entities/user';
import { ModelService } from '../../../core/model.service';

@Injectable()
export class UserService extends ModelService<User>{
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
  async update(user: User): Promise<User> {
    return this.userRepository.save(user);
  }
}