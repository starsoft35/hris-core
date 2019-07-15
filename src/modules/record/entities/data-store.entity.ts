import { Column, Entity, JoinColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { TransactionDate } from '../../../core/entities/transaction-date.entity';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from 'src/modules/training/entities/training-session.entity';
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';
import { TransactionUser } from 'src/core/entities/transaction-user.entity';

@Entity('datastore', { schema: 'public' })
export class DataStore extends UserIdentifiableObject {

    static plural = 'dataStore';

    @PrimaryGeneratedColumn({
        name: 'datastoreid',
    })
    id: number;

    @Column('character varying', {
        nullable: false,
        length: 64,
        name: 'namespace',
    })
    namespace: string;

    @Column('character varying', {
        nullable: false,
        length: 64,
        name: 'key',
    })
    key: string;

    @Column('json', {
        nullable: false,
        name: 'value',
    })
    value: any;
}
