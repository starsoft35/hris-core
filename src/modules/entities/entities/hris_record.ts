import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Organisationunit } from './hris_organisationunit';
import { Form } from './hris_form';
import { Leave } from './hris_leave';
import { RecordHistory } from './hris_record_history';
import { RecordTraining } from './hris_record_training';

@Entity('record', { schema: 'public' })
@Index('idx_5e5895d45ff69b7d', ['form'])
@Index('uniq_5e5895d44230b1de', ['instance'], { unique: true })
@Index('idx_5e5895d483954d93', ['organisationunit'])
@Index('uniq_5e5895d4539b0606', ['uid'], { unique: true })
export class Record {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisRecords,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationunit: Organisationunit | null;

  @ManyToOne(() => Form, (Form: Form) => Form.hrisRecords, {
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
  hashistory: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'hastraining',
  })
  hastraining: boolean;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @OneToMany(() => Leave, (Leave: Leave) => Leave.record, {
    onDelete: 'CASCADE',
  })
  hrisLeaves: Leave[];

  @OneToMany(
    () => RecordHistory,
    (RecordHistory: RecordHistory) => RecordHistory.record,
    { onDelete: 'CASCADE' },
  )
  hrisRecordHistorys: RecordHistory[];

  @OneToMany(
    () => RecordTraining,
    (RecordTraining: RecordTraining) => RecordTraining.record,
    { onDelete: 'CASCADE' },
  )
  hrisRecordTrainings: RecordTraining[];
}
