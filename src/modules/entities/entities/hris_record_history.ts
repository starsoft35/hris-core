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
import { Record } from './hris_record';
import { Field } from './hris_field';

@Entity('recordhistory', { schema: 'public' })
@Index('idx_bab4b7b443707b0', ['field'])
@Index('unique_recordhistory_idx', ['history', 'record', 'startdate'], {
  unique: true,
})
@Index('idx_bab4b7b4dfd750c', ['record'])
@Index('uniq_bab4b7b539b0606', ['uid'], { unique: true })
export class RecordHistory {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Record,
    (Record: Record) => Record.hrisRecordHistorys,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisRecordHistorys,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'history',
  })
  history: string;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'reason',
  })
  reason: string | null;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'startdate',
  })
  startdate: Date;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

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

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'enddate',
  })
  enddate: Date | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'entitled_payment',
  })
  entitled_payment: string | null;

  @Column('integer', {
    nullable: true,
    name: 'organisationunitid',
  })
  organisationunitid: number | null;
}
