import { TransactionTimestamp } from 'src/core/entities/transaction-timestamp.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Field } from '../../maintenance/field/entities/field.entity';
import { Record } from './record.entity';
import { TransactionUser } from '../../../core/entities/transaction-user.entity';

@Entity('recordvalue', { schema: 'public' })
export class RecordValue extends TransactionUser {
  @PrimaryGeneratedColumn({
    name: 'recordvalueid',
  })
  id: number;

  @ManyToOne(type => Record, record => record.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  // @ManyToOne(type => Field, field => field.id, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'fieldid' })
  // field: Field | null;

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
}
