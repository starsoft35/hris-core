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
import { Organisationunit } from './hris_organisationunit';
import { IntergrationDhisDataelementfieldoptionrelation } from './hris_intergration_dhis_dataelementfieldoptionrelation';
import { Fieldoptiongroupset } from './hris_fieldoptiongroupset';

@Entity('intergrationdhisdataconnection', { schema: 'public' })
@Index('unique_serverdatasetname_idx', ['dataset_name', 'host_url'], {
  unique: true,
})
@Index('unique_serverdatasetuid_idx', ['dataset_uid', 'host_url'], {
  unique: true,
})
@Index('idx_c47f616d4108d2f5', ['parentOrganisationunit'])
@Index('uniq_c47f616d539b0606', ['uid'], { unique: true })
export class IntergrationDhisDataconnection {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisIntergrationDhisDataconnections,
    {},
  )
  @JoinColumn({ name: 'parentorganisationunitid' })
  parentOrganisationunit: Organisationunit | null;

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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'dataset_name',
  })
  dataset_name: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'datasetuid',
  })
  dataset_uid: string;

  @Column('text', {
    nullable: true,
    name: 'dataset_html',
  })
  dataset_html: string | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'host_url',
  })
  host_url: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'password',
  })
  password: string;

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
    () => IntergrationDhisDataelementfieldoptionrelation,
    (
      IntergrationDhisDataelementfieldoptionrelation: IntergrationDhisDataelementfieldoptionrelation,
    ) => IntergrationDhisDataelementfieldoptionrelation.dhisDataConnection,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationDhisDataelementfieldoptionrelations: IntergrationDhisDataelementfieldoptionrelation[];

  @ManyToMany(
    () => Fieldoptiongroupset,
    (Fieldoptiongroupset: Fieldoptiongroupset) =>
      Fieldoptiongroupset.hrisIntergrationDhisDataconnections,
    { nullable: false },
  )
  @JoinTable({ name: 'intergrationdhisfieldoptiongroupsetmember' })
  hrisFieldoptiongroupsets: Fieldoptiongroupset[];
}
