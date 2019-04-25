import { Column, Entity, Index, OneToMany } from 'typeorm';

import { hris_organisationunitstructure } from '../../../database/entities/hris_organisationunitstructure';

@Entity('organisationunitlevel', { schema: 'public' })
export class OrganisationUnitLevel {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('integer', {
    nullable: false,
    name: 'level',
  })
  level: number;

  @Column('character varying', {
    nullable: false,
    length: 128,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('boolean', {
    nullable: false,
    name: 'dataentrylevel',
  })
  dataEntryLevel: boolean;

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
  //     type => hris_organisationunitstructure,
  //     hris_organisationunitstructure => hris_organisationunitstructure.level_,
  //     { onDelete: 'CASCADE' },
  //   )
  //   hris_organisationunitstructures: hris_organisationunitstructure[];
}
