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
import { FormFieldmembers } from './hris_form_fieldmembers';
import { FormVisiblefields } from './hris_form_visiblefields';
import { Formsection } from './hris_formsection';
import { Organisationunitcompleteness } from './hris_organisationunitcompleteness';
import { Record } from './hris_record';
import { record } from './record';
import { Dashboardchart } from './hris_dashboardchart';
import { Field } from './hris_field';
import { User } from './hris_user';

@Entity('form', { schema: 'public' })
@Index('uniq_b5d0adef5e237e06', ['name'], { unique: true })
@Index('uniq_b5d0adef539b0606', ['uid'], { unique: true })
export class Form {
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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'hypertext',
  })
  hypertext: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'title',
  })
  title: string | null;

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
    () => FormFieldmembers,
    (FormFieldmembers: FormFieldmembers) =>
      FormFieldmembers.form,
    { onDelete: 'CASCADE' },
  )
  hrisFormFieldmemberss: FormFieldmembers[];

  @OneToMany(
    () => FormVisiblefields,
    (FormVisiblefields: FormVisiblefields) =>
      FormVisiblefields.form,
    { onDelete: 'CASCADE' },
  )
  hrisFormVisiblefieldss: FormVisiblefields[];

  @OneToMany(
    () => Formsection,
    (Formsection: Formsection) => Formsection.form,
    { onDelete: 'CASCADE' },
  )
  hrisFormsections: Formsection[];

  @OneToMany(
    () => Organisationunitcompleteness,
    (Organisationunitcompleteness: Organisationunitcompleteness) =>
      Organisationunitcompleteness.form,
  )
  hrisOrganisationunitcompletenesss: Organisationunitcompleteness[];

  @OneToMany(
    () => Record,
    (Record: Record) => Record.form,
    { onDelete: 'CASCADE' },
  )
  hrisRecords: Record[];

  @OneToMany(() => record, (record: record) => record.form, {
    onDelete: 'CASCADE',
  })
  records: record[];

  @ManyToMany(
    () => Dashboardchart,
    (Dashboardchart: Dashboardchart) => Dashboardchart.hrisForms,
  )
  hrisDashboardcharts: Dashboardchart[];

  @ManyToMany(
    () => Field,
    (Field: Field) => Field.hrisForms,
    { nullable: false },
  )
  @JoinTable({ name: 'formuniquerecordfields' })
  hrisFields: Field[];

  @ManyToMany(() => User, (User: User) => User.hrisForms)
  hrisUsers: User[];
  users: any;
}
