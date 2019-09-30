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
import { Fieldgroup } from './hris_fieldgroup';

@Entity('fieldgroupset', { schema: 'public' })
@Index('uniq_4e9400b65e237e06', ['name'], { unique: true })
@Index('uniq_4e9400b6539b0606', ['uid'], { unique: true })
export class Fieldgroupset {
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
    () => Fieldgroup,
    (Fieldgroup: Fieldgroup) => Fieldgroup.hrisFieldgroupsets,
    { nullable: false },
  )
  @JoinTable({ name: 'fieldgroupsetmembers' })
  hrisFieldgroups: Fieldgroup[];
}
