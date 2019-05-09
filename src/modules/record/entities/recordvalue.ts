import { TransactionDate } from '../../../core/entities/transaction-date.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from '../../../database/entities/hris_field';
import { Record } from './record';

@Entity('recordvalue', { schema: 'public' })
export class RecordValue extends TransactionDate {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'recordvalueid',
  })
  recordValueId: number;

  @ManyToOne(type => Record, record => record.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @ManyToOne(type => Field, field => field.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fieldid' })
  fieldId: Field | null;

  @Column('text', {
    nullable: false,
    name: 'value',
  })
  value: string;
}
