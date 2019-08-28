import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { DashboardChart } from 'src/modules/dashboard/entities/dashboard-chart.entity';
import { Record } from 'src/modules/record/entities/record.entity';
import { TrainingSession } from 'src/modules/training/entities/training-session.entity';
import { TrainingVenue } from 'src/modules/training/entities/training-venue.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { OrganisationUnitCompleteness } from './organisation-unit-completeness.entity';
import { OrganisationUnitGroup } from './organisation-unit-group.entity';

@Entity('organisationunit', { schema: 'public' })
export class OrganisationUnit extends IdentifiableObject {
  static plural = 'organisationUnits';

  @PrimaryGeneratedColumn({
    name: 'organisationunitid',
  })
  id: number;

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

  @OneToMany(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.parent,
    {
      cascade: ['insert', 'update'],
    },
  )
  children: OrganisationUnit[];

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

  @OneToMany(type => Record, record => record.organisationUnit, {
    onDelete: 'CASCADE',
  })
  records: Record[];

  @OneToMany(
    type => TrainingSession,
    trainingSession => trainingSession.organisationUnit,
    { onDelete: 'CASCADE' },
  )
  trainingSessions: TrainingSession[];

  @OneToMany(
    type => TrainingVenue,
    trainingVenue => trainingVenue.organisationUnit,
    { onDelete: 'CASCADE' },
  )
  trainingVenues: TrainingVenue[];

  @OneToMany(type => User, user => user.organisationUnits, {
    onDelete: 'CASCADE',
  })
  users: User[];

  @ManyToMany(
    type => OrganisationUnitGroup,
    organisationUnitGroup => organisationUnitGroup.organisationUnits,
  )
  organisationUnitGroups: OrganisationUnitGroup[];

  @ManyToMany(
    type => DashboardChart,
    dashboardChart => dashboardChart.organisationUnits,
  )
  dashboardCharts: DashboardChart[];
}
