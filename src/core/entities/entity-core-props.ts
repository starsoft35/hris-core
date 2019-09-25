import { BeforeInsert, Column, PrimaryGeneratedColumn } from 'typeorm';
import * as uuid from 'uuid/v1';
import { getUid } from '@iapps/utils/utils';

import { TransactionTimestamp } from './transaction-timestamp.entity';

export class EntityCoreProps extends TransactionTimestamp {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 256, unique: true })
    uid: string;

    @Column({
        type: 'varchar',
        nullable: true,
        length: 25,
        default: () => 'NULL::varchar',
    })
    code: string | null;

    @Column({ type: 'varchar', length: 256 })
    name: string;

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

        // ! Generating UUID is DEPRECATED
        // this.uid = uuid();
        // this.uid = this.uid.split('-').join('');
        // this.uid = this.uid.substr(0, 13);
        // ! Generating UUID is DEPRECATED
    }
}
