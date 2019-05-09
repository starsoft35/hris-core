import { JoinColumn } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';
import { User } from './user.entity';
import { TransactionDate } from 'src/core/entities/transaction-date.entity';
@ObjectType()
export abstract class UserTracker extends TransactionDate {
    @JoinColumn({ name: 'createbyid' })
    createdBy: User;

    @JoinColumn({ name: 'updatedbyid' })
    lastUpdatedBy: User;
}
