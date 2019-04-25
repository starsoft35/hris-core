import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { OrganisationUnitGroupSet } from './organisation-unit-group-set.entity';
import { OrganisationUnit } from './organisation-unit.entity';

@Entity('organisationunitgroup', { schema: 'public' })
@Index('uniq_7c8c96e177153098', ['code'], { unique: true })
@Index('uniq_7c8c96e17f0db905', ['dhisuid'], { unique: true })
@Index('uniq_7c8c96e15e237e06', ['name'], { unique: true })
@Index('idx_7c8c96e13c4f988f', ['organisationUnitGroupSetId'])
@Index('uniq_7c8c96e1539b0606', ['uid'], { unique: true })
export class OrganisationUnitGroup {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    type => OrganisationUnitGroupSet,
    organisationUnitGroupSet => organisationUnitGroupSet.organisationUnitGroups,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitgroupsetid' })
  organisationUnitGroupSetId: string;

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
  dateCreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastUpdated: Date | null;

  //   @OneToMany(
  //     type => hris_indicator_target,
  //     hris_indicator_target => hris_indicator_target.organisationunitgroup_,
  //     { onDelete: 'CASCADE' },
  //   )
  //   hris_indicator_targets: hris_indicator_target[];

  @ManyToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.organisationUnitGroups,
    { nullable: false },
  )
  @JoinTable({ name: 'organisationunitgroupmembers' })
  organisationUnits: OrganisationUnit[];
}
