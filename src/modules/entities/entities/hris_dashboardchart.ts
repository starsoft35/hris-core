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
import { Field } from './hris_field';
import { User } from './hris_user';
import { Form } from './hris_form';
import { Organisationunit } from './hris_organisationunit';

@Entity('dashboardchart', { schema: 'public' })
@Index(
  'userfieldonetwographtypelowerlevel_idx',
  ['fieldone', 'fieldtwo', 'graphtype', 'lowerlevels', 'user'],
  { unique: true },
)
@Index('idx_34cd0e7e5a05b474', ['fieldone'])
@Index('idx_34cd0e7e315953bb', ['fieldtwo'])
@Index('uniq_34cd0e7e5e237e06', ['name'], { unique: true })
@Index('idx_34cd0e7ea76ed395', ['user'])
export class Dashboardchart {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (field: Field) => field.hrisDashboardcharts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldoneid' })
  fieldone: Field | null;

  @ManyToOne(
    () => Field,
    (field: Field) => field.hrisDashboardcharts2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldtwoid' })
  fieldtwo: Field | null;

  @ManyToOne(
    () => User,
    (user: User) => user.dashboardCharts,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'userid' })
  user: User | null;

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
    nullable: false,
    length: 64,
    name: 'graphtype',
  })
  graphtype: string;

  @Column('boolean', {
    nullable: false,
    name: 'lowerlevels',
  })
  lowerlevels: boolean;

  @Column('boolean', {
    nullable: false,
    name: 'systemwide',
  })
  systemwide: boolean;

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
    () => Form,
    (form: Form) => form.hrisDashboardcharts,
    { nullable: false },
  )
  @JoinTable({ name: 'dashboardchartformmembers' })
  hrisForms: Form[];

  @ManyToMany(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisDashboardcharts,
    { nullable: false },
  )
  @JoinTable({ name: 'dashboardchartorganisationunitmembers' })
  hrisOrganisationunits: Organisationunit[];
}
