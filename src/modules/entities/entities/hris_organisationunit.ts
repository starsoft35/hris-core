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
import { IntergrationDhisDataconnection } from './hris_intergration_dhis_dataconnection';
import { IntergrationTiisDataConnection } from './hris_intergration_tiis_data_connection';
import { Organisationunitcompleteness } from './hris_organisationunitcompleteness';
import { Organisationunitstructure } from './hris_organisationunitstructure';
import { Record } from './hris_record';
import { Traininginstance } from './hris_traininginstance';
import { User } from './hris_user';
import { record } from './record';
import { Dashboardchart } from './hris_dashboardchart';
import { Organisationunitgroup } from './hris_organisationunitgroup';

@Entity('organisationunit', { schema: 'public' })
@Index('uniq_9394222277153098', ['code'], { unique: true })
@Index('uniq_939422227f0db905', ['dhisuid'], { unique: true })
@Index('organisationunits_with_one_parent_idx', ['longname', 'parent'], {
  unique: true,
})
@Index('idx_93942222727aca70', ['parent'])
@Index('uniq_9394222264082763', ['shortname'], { unique: true })
@Index('uniq_93942222539b0606', ['uid'], { unique: true })
export class Organisationunit {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunits,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'parentid' })
  parent: Organisationunit | null;

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
    nullable: true,
    length: 25,
    default: () => 'NULL::character varying',
    name: 'code',
  })
  code: string | null;

  @Column('character varying', {
    nullable: false,
    length: 20,
    name: 'shortname',
  })
  shortname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'longname',
  })
  longname: string;

  @Column('boolean', {
    nullable: true,
    name: 'active',
  })
  active: boolean | null;

  @Column('date', {
    nullable: true,
    name: 'openingdate',
  })
  openingdate: string | null;

  @Column('date', {
    nullable: true,
    name: 'closingdate',
  })
  closingdate: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'geocode',
  })
  geocode: string | null;

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
  featuretype: string | null;

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
  phonenumber: string | null;

  @Column('character varying', {
    nullable: true,
    length: 150,
    default: () => 'NULL::character varying',
    name: 'contactperson',
  })
  contactperson: string | null;

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

  @OneToMany(
    () => IntergrationDhisDataconnection,
    (IntergrationDhisDataconnection: IntergrationDhisDataconnection) =>
      IntergrationDhisDataconnection.parentOrganisationunit,
  )
  hrisIntergrationDhisDataconnections: IntergrationDhisDataconnection[];

  @OneToMany(
    () => IntergrationTiisDataConnection,
    (IntergrationTiisDataConnection: IntergrationTiisDataConnection) =>
      IntergrationTiisDataConnection.organisationunit,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationTiisDataConnections: IntergrationTiisDataConnection[];

  @OneToMany(
    () => Organisationunit,
    (Organisationunit: Organisationunit) => Organisationunit.parent,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunits: Organisationunit[];

  @OneToMany(
    () => Organisationunitcompleteness,
    (Organisationunitcompleteness: Organisationunitcompleteness) =>
      Organisationunitcompleteness.organisationunit,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitcompletenesss: Organisationunitcompleteness[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level2,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures: Organisationunitstructure[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level3,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures2: Organisationunitstructure[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level4,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures3: Organisationunitstructure[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level5,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures4: Organisationunitstructure[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level6,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures5: Organisationunitstructure[];

  @OneToMany(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.level7,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructures6: Organisationunitstructure[];

  @OneToOne(
    () => Organisationunitstructure,
    (Organisationunitstructure: Organisationunitstructure) =>
      Organisationunitstructure.organisationunit,
    { onDelete: 'CASCADE' },
  )
  hrisOrganisationunitstructure: Organisationunitstructure | null;

  @OneToMany(() => Record, (Record: Record) => Record.organisationunit, {
    onDelete: 'CASCADE',
  })
  hrisRecords: Record[];

  @OneToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.district,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances: Traininginstance[];

  @OneToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.region,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances2: Traininginstance[];

  @OneToMany(
    () => User,
    (User: User) => User.organisationUnits,
    { onDelete: 'CASCADE' },
  )
  hrisUsers: User[];

  @OneToMany(() => record, (record: record) => record.organisationunit, {
    onDelete: 'CASCADE',
  })
  records: record[];

  @ManyToMany(
    () => Dashboardchart,
    (Dashboardchart: Dashboardchart) => Dashboardchart.hrisOrganisationunits,
  )
  hrisDashboardcharts: Dashboardchart[];

  @ManyToMany(
    () => Organisationunitgroup,
    (Organisationunitgroup: Organisationunitgroup) =>
      Organisationunitgroup.hrisOrganisationunits,
  )
  hrisOrganisationunitgroups: Organisationunitgroup[];
  users: any;
}
