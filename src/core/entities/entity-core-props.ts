import { BeforeInsert, Column } from 'typeorm';
import * as uuid from 'uuid/v1';
import { getUid } from '@iapps/utils/utils';

import { TransactionDate } from './transaction-date.entity';

export class EntityCoreProps extends TransactionDate {
    @Column('character varying', {
        nullable: false,
        length: 256,
        name: 'uid',
        unique: true,
    })
    uid: string;

    @Column('character varying', {
        nullable: true,
        length: 25,
        default: () => 'NULL::character varying',
        name: 'code',
    })
    code: string | null;

    @BeforeInsert()
    beforeInsertEntityCoreProps() {
        /**
         *  You can generate UUID in different ways
         *  1. You can generate uuid of any length: i.e getUid('', 20)
         *      Example of UUID::: 8aydSxYBrrP
         *  2. You can generat UUID by prepending a context specific keyword i.e getUid('HRIS', 20)
         *      Example of UUID::: HRIS_8aydSxYBrrP
         */
        this.uid = getUid('hris', 20);

        // ! Generating UUID is DEPRECATED
        // this.uid = uuid();
        // this.uid = this.uid.split('-').join('');
        // this.uid = this.uid.substr(0, 13);
        // ! Generating UUID is DEPRECATED
    }
}
