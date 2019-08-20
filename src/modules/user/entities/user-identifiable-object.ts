import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

export class UserIdentifiableObject extends IdentifiableObject {
  @JoinColumn({ name: 'createdbyid' })
  createdBy: User;

  @JoinColumn({ name: 'lastupdatedbyid' })
  lastUpdatedBy: User;
}
