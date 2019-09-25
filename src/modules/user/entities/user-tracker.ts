import { TransactionTimestamp } from 'src/core/entities/transaction-timestamp.entity';
import { JoinColumn } from 'typeorm';

import { User } from './user.entity';

export abstract class UserTracker extends TransactionTimestamp {
  @JoinColumn({ name: 'createbyid' })
  createdBy: User;

  @JoinColumn({ name: 'updatedbyid' })
  lastUpdatedBy: User;
}
