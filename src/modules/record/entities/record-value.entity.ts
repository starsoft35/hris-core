import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from '../../../database/entities/hris_field';
import { Record } from './record.entity';
import { OrganisationUnit } from 'src/modules/organisation-unit/entities/organisation-unit.entity';
import { User } from 'src/modules/user/entities/user';

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
  field: Field | null;

  @Column('text', {
    nullable: false,
    name: 'value',
  })
  value: string;

  @Column("timestamp without time zone", {
    nullable: false,
    name: "startdate"
  })
  startdate: Date;

  @Column("timestamp without time zone", {
    nullable: true,
    default: () => "NULL::timestamp without time zone",
    name: "enddate"
  })
  enddate: Date | null;

  @Column("character varying", {
    nullable: true,
    length: 255,
    default: () => "NULL::character varying",
    name: "comment"
  })
  comment: string | null;

  @JoinColumn({ name: 'userid' })
  createdBy: User | null;
}
