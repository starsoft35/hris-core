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
import { IntergrationTiisEmployeeFieldrelation } from './hris_intergration_tiis_employee_fieldrelation';

@Entity('intergrationtiisdataconnection', { schema: 'public' })
@Index('idx_eaa7f9f983954d93', ['organisationunit'])
@Index('uniq_eaa7f9f9539b0606', ['uid'], { unique: true })
export class IntergrationTiisDataConnection {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisIntergrationTiisDataConnections,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationunit: Organisationunit | null;

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
    name: 'recordstablename',
  })
  recordstablename: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'organisationunittablename',
  })
  organisationunittablename: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'organisationunitlongnamecolumnname',
  })
  organisationunitlongnamecolumnname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'organisationunitcodecolumnname',
  })
  organisationunitcodecolumnname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'organisationunitownershipcolumnname',
  })
  organisationunitownershipcolumnname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'recordsorganisationunitcolumnname',
  })
  recordsorganisationunitcolumnname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'recordsinstancecolumnname',
  })
  recordsinstancecolumnname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'tiisparentorganisationunitcode',
  })
  tiisparentorganisationunitcode: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'hristopmostorganisationunitshrotname',
  })
  hristopmostorganisationunitshrotname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'hrisinstituiongroupname',
  })
  hrisinstituiongroupname: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'host_url',
  })
  host_url: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'password',
  })
  password: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'database',
  })
  database: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'employeeformname',
  })
  employeeformname: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'defaultnationality',
  })
  defaultnationality: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'defaulthrnationality',
  })
  defaulthrnationality: string;

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

  @OneToOne(
    () => IntergrationTiisEmployeeFieldrelation,
    (
      IntergrationTiisEmployeeFieldrelation: IntergrationTiisEmployeeFieldrelation,
    ) => IntergrationTiisEmployeeFieldrelation.tiisDataConnection,
    { onDelete: 'CASCADE' },
  )
  hrisIntergrationTiisEmployeeFieldrelation: IntergrationTiisEmployeeFieldrelation | null;
}
