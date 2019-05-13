import { Column, Entity, JoinColumn, ManyToOne, ManyToMany } from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { TransactionDate } from '../../../core/entities/transaction-date.entity';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from 'src/modules/training/entities/training-session.entity';

@Entity('record', { schema: 'public' })
export class Record extends TransactionDate {

  static plural = 'records';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

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
    length: 13,
    name: 'uid',
  })
  uid: string;

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

  @Column('boolean', {
    nullable: false,
    name: 'complete',
  })
  complete: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'correct',
  })
  correct: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'hashistory',
  })
  hasHistory: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'hastraining',
  })
  hasTraining: boolean;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @ManyToMany(
    type => TrainingSession,
    trainingSession => trainingSession.trainingMethods,
  )
  trainingSessions: TrainingSession[];
}
