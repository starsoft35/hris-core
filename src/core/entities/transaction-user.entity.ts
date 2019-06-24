import {
    JoinColumn
} from 'typeorm';
import { User } from 'src/modules/user/entities/user.entity';
import { TransactionDate } from './transaction-date.entity';

export abstract class TransactionUser extends TransactionDate {
    @JoinColumn({ name: 'createdbyid' })
    createdBy: User;

    @JoinColumn({ name: 'lastupdatedbyid' })
    lastUpdatedBy: User;
}
