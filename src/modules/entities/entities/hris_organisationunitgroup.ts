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
import { Organisationunitgroupset } from './hris_organisationunitgroupset';
import { IndicatorTarget } from './hris_indicator_target';
import { Organisationunit } from './hris_organisationunit';

@Entity('organisationunitgroup', { schema: 'public' })
@Index('uniq_7c8c96e177153098', ['code'], { unique: true })
@Index('uniq_7c8c96e17f0db905', ['dhisuid'], { unique: true })
@Index('uniq_7c8c96e15e237e06', ['name'], { unique: true })
@Index('idx_7c8c96e13c4f988f', ['organisationunitgroupset'])
@Index('uniq_7c8c96e1539b0606', ['uid'], { unique: true })
export class Organisationunitgroup {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;


  @ManyToOne(
    () => Organisationunitgroupset,
    (Organisationunitgroupset: Organisationunitgroupset) =>
      Organisationunitgroupset.hrisOrganisationunitgroups,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitgroupsetid' })
  organisationunitgroupset: Organisationunitgroupset | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
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

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'dhisuid',
  })
  dhisuid: string | null;

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
    () => IndicatorTarget,
    (IndicatorTarget: IndicatorTarget) => IndicatorTarget.organisationunitgroup,
    { onDelete: 'CASCADE' },
  )
  hrisIndicatorTargets: IndicatorTarget[];

  @ManyToMany(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitgroups,
    { nullable: false },
  )
  @JoinTable({ name: 'Organisationunitgroupmembers' })
  hrisOrganisationunits: Organisationunit[];
}
