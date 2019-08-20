import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

export abstract class UserTracker extends TransactionDate {
  @JoinColumn({ name: 'createbyid' })
  createdBy: User;

  @JoinColumn({ name: 'updatedbyid' })
  lastUpdatedBy: User;
}
