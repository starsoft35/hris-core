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
import { Fieldoption } from './hris_fieldoption';

@Entity('fieldoptionmerge', { schema: 'public' })
@Index('idx_c45d97c3443707b0', ['field'])
@Index(
  'unique_fieldoptionmerge_idx',
  ['field', 'mergedfieldoption', 'removedfieldoptionvalue'],
  { unique: true },
)
@Index('idx_c45d97c359907821', ['mergedfieldoption'])
@Index('uniq_c45d97c340cf28c8', ['removedfieldoptionuid'], { unique: true })
@Index('uniq_c45d97c3539b0606', ['uid'], { unique: true })
export class Fieldoptionmerge {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFieldoptionmerges,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @ManyToOne(
    () => Fieldoption,
    (Fieldoption: Fieldoption) =>
      Fieldoption.hrisFieldoptionmerges,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'mergedfieldoption_id' })
  mergedfieldoption: Fieldoption | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'removedfieldoptionvalue',
  })
  removedfieldoptionvalue: string;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'removedfieldoptionuid',
  })
  removedfieldoptionuid: string;

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
