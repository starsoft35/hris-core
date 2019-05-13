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
    user.confirmationToken = this.encodePassword(password, user.salt);
    this.userService.update(user.uid, user);
    return user;
  }
  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.userService.findOneByToken(token);
  }

  encodePassword(raw, salt) {
    const salted = this.mergePasswordAndSalt(raw, salt);
    const digest = this.hash(this.algorithm, salted, true);

    // "stretch" hash
    /*for (let i = 1; i < this.iterations; i++) {
      digest = this.hash(this.algorithm, digest + salted, true);
    }*/

    return createHash('sha256', salt)
      .update(raw)
      .digest('hex');
    // return this.encodeHashAsBase64 ? digest.toString() : this.bin2hex(digest);
  }

  hash(algorithm, data, ifTrue) {
    // creating hash object
    const hash = createHash(algorithm);
    const d = hash.update(data);
    // passing the data to be hashed
    return hash.update(data);
    // Creating the hash in the required format
    // return data.digest('hex');
  }
  bin2hex(data) {
    const digest = data.digest('hex');
    return digest;
  }
  /**
   * {@inheritdoc}
   */
  /*isPasswordValid(encoded, raw, salt) {
    return this.comparePasswords(encoded, this.encodePassword(raw, salt));
  }*/

  mergePasswordAndSalt(password, salt) {
    if (!salt) {
      return password;
    }

    if (salt.indexOf('{') > -1 || salt.indexOf('?') > -1) {
      throw new Error('Cannot use { or } in salt.');
    }

    return password + '{' + salt + '}';
  }
}
