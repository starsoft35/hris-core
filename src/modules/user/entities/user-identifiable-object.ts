import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { ObjectType } from 'type-graphql';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

@ObjectType()
export class UserIdentifiableObject extends IdentifiableObject {
  @JoinColumn({ name: 'createdbyid' })
  createdBy: User;

  @JoinColumn({ name: 'updatedbyid' })
  lastUpdatedBy: User;
}
