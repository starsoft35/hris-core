import { Column, Entity, Generated, PrimaryColumn } from 'typeorm';
import { UserIdentification } from '../../../modules/system/user/entities/user-identification';

import { Form } from '../../form/entities/form.entity';
import { TransactionTimestamp } from '../../../core/entities/transaction-timestamp.entity';
import { OrganisationUnit } from '../../../modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingInstance } from '../../training/entities/training-instance.entity';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';

@Entity('datastore', { schema: 'public' })
export class DataStore extends UserIdentification {

    static plural = 'dataStore';

    @PrimaryColumn({ select: false })
    @Generated('increment')
    id: number;

    @Column({ type: 'varchar', length: 256, unique: true })
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
