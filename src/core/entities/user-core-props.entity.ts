import {
    BeforeInsert,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
} from 'typeorm';
import { getUid } from '@iapps/utils/utils';
import { User } from '../../modules/user/entities/user.entity';
import { TransactionTimestamp } from './transaction-timestamp.entity';

export class UserCoreProps extends TransactionTimestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 256, unique: true })
    uid: string;

    @JoinColumn({ name: 'createdbyid' })
    createdBy: User;

    @JoinColumn({ name: 'lastupdatedbyid' })
    lastUpdatedBy: User;

    @BeforeInsert()
    beforeInsertEntityCoreProps() {
        /**
         *  You can generate UUID in different ways
         *  1. You can generate uuid of any length: i.e getUid('', 20)
         *      Example of UUID::: 8aydSxYBrrP
         *  2. You can generat UUID by prepending a context specific keyword i.e getUid('HRIS', 20)
         *      Example of UUID::: HRIS_8aydSxYBrrP
         */
        this.uid = getUid('', 11);
    }
}
