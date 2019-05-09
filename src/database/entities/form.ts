import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { hris_dashboardchart } from './hris_dashboardchart';
import { Field } from './hris_field';
import { hris_form_fieldmembers } from './hris_form_fieldmembers';
import { hris_form_visiblefields } from './hris_form_visiblefields';
import { hris_formsection } from './hris_formsection';
import { Record } from '../../modules/record/entities/record.entity';
import { User } from '../../modules/user/entities/user';

@Entity('hris_form', { schema: 'public' })
@Index('uniq_b5d0adef5e237e06', ['name'], { unique: true })
@Index('uniq_b5d0adef539b0606', ['uid'], { unique: true })
export class hris_form {
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
    type => hris_form_fieldmembers,
    hris_form_fieldmembers => hris_form_fieldmembers.form_,
    { onDelete: 'CASCADE' },
  )
  hris_form_fieldmemberss: hris_form_fieldmembers[];

  @OneToMany(
    type => hris_form_visiblefields,
    hris_form_visiblefields => hris_form_visiblefields.form_,
    { onDelete: 'CASCADE' },
  )
  hris_form_visiblefieldss: hris_form_visiblefields[];

  @OneToMany(
    type => hris_formsection,
    hris_formsection => hris_formsection.form_,
    { onDelete: 'CASCADE' },
  )
  hris_formsections: hris_formsection[];

  // @OneToMany(
  //   type => hris_organisationunitcompleteness,
  //   hris_organisationunitcompleteness =>
  //     hris_organisationunitcompleteness.form_,
  // )
  // hris_organisationunitcompletenesss: hris_organisationunitcompleteness[];

  // @OneToMany(type => Record, Record => Record.form_, {
  //   onDelete: 'CASCADE',
  // })
  // records: Record[];

  @ManyToMany(type => Field, Field => Field.hris_forms, {
    nullable: false,
  })
  @JoinTable({ name: 'hris_form_uniquerecordfields' })
  hris_fields: Field[];

  @ManyToMany(type => User, User => User.hris_forms)
  hris_users: User[];

  @ManyToMany(
    type => hris_dashboardchart,
    hris_dashboardchart => hris_dashboardchart.hris_forms,
  )
  hris_dashboardcharts: hris_dashboardchart[];
}
