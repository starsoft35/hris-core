import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { createHash } from 'crypto';
import { User } from 'src/database/entities/user';

@Injectable()
export class AuthService {
  private algorithm = 'sha512';
  private encodeHashAsBase64 = true;
  private iterations = 0;

  constructor(private readonly userService: UserService) {}

  async login(username, password): Promise<User> {
    let user = await this.userService.findByUsername(username);
    user.confirmation_token = this.encodePassword(password, user.salt);
    this.userService.update(user);
    return user;
  }
  async validateUser(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return await this.userService.findOneByToken(token);
  }

  encodePassword(raw, salt) {
    let salted = this.mergePasswordAndSalt(raw, salt);
    let digest = this.hash(this.algorithm, salted, true);

    // "stretch" hash
    /*for (let i = 1; i < this.iterations; i++) {
      digest = this.hash(this.algorithm, digest + salted, true);
    }*/

    return createHash('sha256', salt)
      .update(raw)
      .digest('hex');
    //return this.encodeHashAsBase64 ? digest.toString() : this.bin2hex(digest);
  }

  hash(algorithm, data, ifTrue) {
    //creating hash object
    var hash = createHash(algorithm);
    let d = hash.update(data);
    console.log('hash.update:', hash.update(data));
    //passing the data to be hashed
    return hash.update(data);
    //Creating the hash in the required format
    //return data.digest('hex');
  }
  bin2hex(data) {
    let digest = data.digest('hex');
    console.log('digest:', digest);
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