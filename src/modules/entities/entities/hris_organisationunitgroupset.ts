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
import { Organisationunitgroup } from './hris_organisationunitgroup';

@Entity('organisationunitgroupset', { schema: 'public' })
@Index('uniq_8d217da077153098', ['code'], { unique: true })
@Index('uniq_8d217da07f0db905', ['dhisuid'], { unique: true })
@Index('uniq_8d217da05e237e06', ['name'], { unique: true })
@Index('uniq_8d217da0539b0606', ['uid'], { unique: true })
export class Organisationunitgroupset {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'dhisuid',
  })
  dhisuid: string | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'description',
  })
  description: string | null;

  @Column('boolean', {
    nullable: false,
    name: 'compulsory',
  })
  compulsory: boolean;

  @Column('character varying', {
    nullable: true,
    length: 50,
    default: () => 'NULL::character varying',
    name: 'code',
  })
  code: string | null;

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

  @OneToMany(
    () => Organisationunitgroup,
    (Organisationunitgroup: Organisationunitgroup) =>
      Organisationunitgroup.organisationunitgroupset,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitgroups: Organisationunitgroup[];
}
