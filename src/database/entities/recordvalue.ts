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
import { Record } from './record';
import { Field } from './hris_field';
import { Tracked } from 'src/core/tracked.entity';

@Entity('recordvalue', { schema: 'public' })
export class RecordValue {
  // extends Tracked {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'recordvalueid',
  })
  recordvalueid: number;

  @ManyToOne(type => Record, Record => Record.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @ManyToOne(type => Field, Field => Field.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('text', {
    nullable: false,
    name: 'value',
  })
  value: string;
}
