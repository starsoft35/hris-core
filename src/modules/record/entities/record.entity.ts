import { SessionParticipant } from '../../../modules/training/entities/training-session-participant.entity';
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';
import { OrganisationUnit } from '../../../modules/organisation-unit/entities/organisation-unit.entity';
import { TrainingSession } from '../../../modules/training/entities/training-session.entity';
import { Form } from '../../form/entities/form.entity';
import { RecordValue } from './record-value.entity';


@Entity('record', { schema: 'public' })
export class Record extends TransactionUser {
  static plural = 'records';

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, unique: true })
  uid: string;

  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.records,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnit: OrganisationUnit | null;

  @ManyToOne(
    type => Form,
    form => form.records,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'instance',
  })
  instance: string;

  @OneToMany(
    () => RecordValue,
    (recordvalue: RecordValue) => recordvalue.record,
    { onDelete: 'CASCADE' },
  )
  recordValues: RecordValue[];

  @ManyToMany(
    type => TrainingSession,
    trainingSession => trainingSession.trainingtopics,
  )
  trainingSessions: TrainingSession[];

  @ManyToMany(type => SessionParticipant, participants => participants.record)
  participants: SessionParticipant[]
}
