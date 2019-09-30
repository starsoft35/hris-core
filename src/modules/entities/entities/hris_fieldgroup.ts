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
import { Fieldgroupset } from './hris_fieldgroupset';
import { Field } from './hris_field';

@Entity('fieldgroup', { schema: 'public' })
@Index('uniq_a03262295e237e06', ['name'], { unique: true })
@Index('uniq_a0326229539b0606', ['uid'], { unique: true })
export class Fieldgroup {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('integer', {
    primary: true,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

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

  @ManyToMany(
    () => Fieldgroupset,
    (Fieldgroupset: Fieldgroupset) => Fieldgroupset.hrisFieldgroups,
  )
  hrisFieldgroupsets: Fieldgroupset[];

  @ManyToMany(() => Field, (Field: Field) => Field.hrisFieldgroups, {
    nullable: false,
  })
  @JoinTable({ name: 'fieldgroupmembers' })
  hrisFields: Field[];
}
