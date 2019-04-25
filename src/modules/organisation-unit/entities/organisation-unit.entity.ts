import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { OrganisationUnitCompleteness } from './organisation-unit-completeness.entity';
import { OrganisationUnitGroup } from './organisation-unit-group.entity';
import IdentifiableObject from 'src/core/entities/identifiable-object';

@Entity('organisationunit', { schema: 'public' })
export class OrganisationUnit extends IdentifiableObject {
  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.organisationUnits,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'parentid' })
  parent: OrganisationUnit | null;

  @Column('character varying', {
    nullable: true,
    length: 11,
    default: () => 'NULL::character varying',
    name: 'dhisuid',
  })
  dhisuid: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'active',
  })
  active: boolean | null;

  @Column('date', {
    nullable: true,
    name: 'openingdate',
  })
  openingDate: string | null;

  @Column('date', {
    nullable: true,
    name: 'closingdate',
  })
  closingDate: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'geocode',
  })
  geoCode: string | null;

  @Column('text', {
    nullable: true,
    name: 'coordinates',
  })
  coordinates: string | null;

  @Column('character varying', {
    nullable: true,
    length: 20,
    default: () => 'NULL::character varying',
    name: 'featuretype',
  })
  featureType: string | null;

  @Column('text', {
    nullable: true,
    name: 'address',
  })
  address: string | null;

  @Column('character varying', {
    nullable: true,
    length: 150,
    default: () => 'NULL::character varying',
    name: 'email',
  })
  email: string | null;

  @Column('character varying', {
    nullable: true,
    length: 150,
    default: () => 'NULL::character varying',
    name: 'phonenumber',
  })
  phoneNumber: string | null;

  @Column('character varying', {
    nullable: true,
    length: 150,
    default: () => 'NULL::character varying',
    name: 'contactperson',
  })
  contactPerson: string | null;

  // @OneToMany(
  //   type => hris_intergration_dhis_dataconnection,
  //   hris_intergration_dhis_dataconnection =>
  //     hris_intergration_dhis_dataconnection.parent_organisationunit_,
  // )
  // hris_intergration_dhis_dataconnections: hris_intergration_dhis_dataconnection[];

  // @OneToMany(
  //   type => hris_intergration_tiis_data_connection,
  //   hris_intergration_tiis_data_connection =>
  //     hris_intergration_tiis_data_connection.organisationunit_,
  //   { onDelete: 'CASCADE' },
  // )
  // hris_intergration_tiis_data_connections: hris_intergration_tiis_data_connection[];

  @OneToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.parent,
    { onDelete: 'CASCADE' },
  )
  organisationUnits: OrganisationUnit[];

  @OneToMany(
    type => OrganisationUnitCompleteness,
    organisationUnitCompleteness =>
      organisationUnitCompleteness.organisationUnitId,
    { onDelete: 'CASCADE' },
  )
  organisationUnitCompletenesses: OrganisationUnitCompleteness[];

  // @OneToMany(type => Record, record => record.organisationunit_, {
  //   onDelete: 'CASCADE',
  // })
  // records: Record[];

  // @OneToMany(
  //   type => hris_traininginstance,
  //   hris_traininginstance => hris_traininginstance.district,
  //   { onDelete: 'CASCADE' },
  // )
  // hris_traininginstances: hris_traininginstance[];

  // @OneToMany(
  //   type => hris_traininginstance,
  //   hris_traininginstance => hris_traininginstance.region,
  //   { onDelete: 'CASCADE' },
  // )
  // hris_traininginstances2: hris_traininginstance[];

  // @OneToMany(type => User, User => User.organisationunit_, {
  //   onDelete: 'CASCADE',
  // })
  // hris_users: User[];

  @ManyToMany(
    type => OrganisationUnitGroup,
    organisationUnitGroup => organisationUnitGroup.organisationUnits,
  )
  organisationUnitGroups: OrganisationUnitGroup[];

  // @ManyToMany(
  //   type => hris_dashboardchart,
  //   hris_dashboardchart => hris_dashboardchart.hris_organisationunits,
  // )
  // hris_dashboardcharts: hris_dashboardchart[];
}
