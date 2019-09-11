import { BeforeInsert, Column } from 'typeorm';
import * as uuid from 'uuid/v1';

import { TransactionDate } from './transaction-date.entity';

export class EntityCoreProps extends TransactionDate {
    @Column('character varying', {
        nullable: false,
        length: 13,
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
    beforeInsertIdentifiable() {
        this.uid = uuid();
        this.uid = this.uid.split('-').join('');
        this.uid = this.uid.substr(0, 13);
    }
}
