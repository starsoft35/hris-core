import { Column, Entity, JoinColumn, ManyToOne, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Form } from '../../form/entities/form.entity';
import { TransactionDate } from '../../../core/entities/transaction-date.entity';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from 'src/modules/training/entities/training-session.entity';
import { UserIdentifiableObject } from 'src/modules/user/entities/user-identifiable-object';
import { TransactionUser } from 'src/core/entities/transaction-user.entity';

@Entity('record', { schema: 'public' })
export class Record extends TransactionUser {

  static plural = 'records';

  @PrimaryGeneratedColumn({
    name: 'recordid',
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

  @ManyToMany(
    type => TrainingSession,
    trainingSession => trainingSession.trainingMethods,
  )
  trainingSessions: TrainingSession[];
}
