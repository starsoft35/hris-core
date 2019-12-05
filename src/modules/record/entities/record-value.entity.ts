import { TransactionTimestamp } from '../../../core/entities/transaction-timestamp.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToOne,
} from 'typeorm';

import { Record } from './record.entity';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';
import { Field } from '../../../modules/maintenance/field/entities/field.entity';

@Entity('recordvalue', { schema: 'public' })
export class RecordValue extends TransactionUser {
  @PrimaryGeneratedColumn()
  recordvalueid: number;

  @ManyToOne(
    () => Record,
    (record: Record) => record.recordValues,
    {},
  )
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @Column('text', {
    nullable: false,
    name: 'value',
  })
  value: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'startdate',
  })
  startDate: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'enddate',
  })
  endDate: Date | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'comment',
  })
  comment: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'entitledpayment',
  })
  entitledPayment: string | null;

  @OneToOne(
    type => Field,
    field => field.recordValue,
    { nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;
}
