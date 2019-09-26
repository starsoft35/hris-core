import {
    JoinColumn
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { TransactionTimestamp } from './transaction-timestamp.entity';

export abstract class TransactionUser extends TransactionTimestamp {
    @JoinColumn({ name: 'createdbyid' })
    createdBy: User;

    @JoinColumn({ name: 'lastupdatedbyid' })
    lastUpdatedBy: User;
}
