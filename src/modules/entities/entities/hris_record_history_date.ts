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
import { Field } from './hris_field';

@Entity('recordhistorydate', { schema: 'public' })
@Index('idx_37522c9443707b0', ['field'])
@Index('uniq_37522c9539b0606', ['uid'], { unique: true })
export class RecordHistoryDate {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisRecordHistoryDates,
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
    name: 'instance',
  })
  instance: string;

  @Column('character varying', {
    nullable: false,
    length: 32,
    name: 'history',
  })
  history: string;

  @Column('date', {
    nullable: false,
    name: 'previousdate',
  })
  previousdate: string;

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
}
