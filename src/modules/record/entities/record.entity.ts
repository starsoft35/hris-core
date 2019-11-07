import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  Generated,
  PrimaryColumn,
} from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { OrganisationUnit } from '../../../modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from '../../../modules/training/entities/training-session.entity';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';
import { TransactionTimestamp } from '../../../core/entities/transaction-timestamp.entity';

@Entity('record', { schema: 'public' })
export class Record extends TransactionUser {
  static plural = 'records';

  @Column({ select: false })
  @Generated('increment')
  id: number;

  @PrimaryColumn({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.records,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnit: OrganisationUnit | null;

  @ManyToOne(type => Form, form => form.records, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'instance',
  })
  instance: string;

  @Column('text', {
    nullable: false,
    name: 'value',
  })
  value: string;

  @ManyToMany(
    type => TrainingSession,
    trainingSession => trainingSession.trainingMethods,
  )
  trainingSessions: TrainingSession[];
}
