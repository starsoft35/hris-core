import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { UserIdentification } from 'src/modules/system/user/entities/user-identification';

import { Form } from '../../form/entities/form.entity';
import { TransactionTimestamp } from '../../../core/entities/transaction-timestamp.entity';
import { OrganisationUnit } from '../../../modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from '../../../modules/training/entities/training-session.entity';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';

@Entity('datastore', { schema: 'public' })
export class DataStore extends UserIdentification {

    static plural = 'dataStore';

    @Column({ select: false })
    @Generated('increment')
    id: number;

    @PrimaryColumn({ type: 'varchar', length: 256, unique: true })
    uid: string;

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
