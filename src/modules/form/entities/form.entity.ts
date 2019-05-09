import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';

import { Field } from './field.entity';
import { FormFieldMember } from './form-field-member.entity';
import { FormVisibleField } from './form-visible-fields.entity';
import { FormSection } from './form-section.entity';
import { Record } from '../../record/entities/record.entity';
import { User } from 'src/modules/user/entities/user.entity';

@Entity('form', { schema: 'public' })
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
    type => FormFieldMember,
    formFieldMember => formFieldMember.form,
    { onDelete: 'CASCADE' },
  )
  formFieldMembers: FormFieldMember[];

  @OneToMany(
    type => FormVisibleField,
    formVisibleField => formVisibleField.form,
    { onDelete: 'CASCADE' },
  )
  formVisibleFields: FormVisibleField[];

  @OneToMany(
    type => FormSection,
    formSection => formSection.form,
    { onDelete: 'CASCADE' },
  )
  formSections: FormSection[];

  // @OneToMany(
  //   type => hris_organisationunitcompleteness,
  //   hris_organisationunitcompleteness =>
  //     hris_organisationunitcompleteness.form_,
  // )
  // hris_organisationunitcompletenesss: hris_organisationunitcompleteness[];

  @OneToMany(type => Record, Record => Record.form, {
    onDelete: 'CASCADE',
  })
  records: Record[];

  @ManyToMany(type => Field, field => field.forms, {
    nullable: false,
  })
  @JoinTable({ name: 'formuniquerecordfields' })
  fields: Field[];

  @ManyToMany(type => User, User => User.forms)
  users: User[];
}
