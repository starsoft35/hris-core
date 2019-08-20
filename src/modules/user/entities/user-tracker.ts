import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import { ObjectType } from 'type-graphql';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

@ObjectType()
export abstract class UserTracker extends TransactionDate {
  @JoinColumn({ name: 'createbyid' })
  createdBy: User;

  @JoinColumn({ name: 'updatedbyid' })
  lastUpdatedBy: User;
}
