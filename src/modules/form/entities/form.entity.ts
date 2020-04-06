import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { OrganisationUnitCompleteness } from '../../../modules/organisation-unit/entities/organisation-unit-completeness.entity';
import { Indicator } from '../../indicator/entities/indicator.entity';
import { Record } from '../../record/entities/record.entity';
import { Field } from './field.entity';
import { FormFieldMember } from './form-field-member.entity';
import { FormSection } from './form-section.entity';
import { FormVisibleField } from './form-visible-fields.entity';


@Entity('form', { schema: 'public' })
export class Form extends EntityCoreProps {
  static plural = 'forms';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'formid',
  })
  id: number;

  @Column('text', {
    nullable: true,
    name: 'hypertext',
  })
  hyperText: string | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'title',
  })
  title: string | null;

  @OneToMany(
    type => FormFieldMember,
    formFieldMember => formFieldMember.form,
    {
      onDelete: 'CASCADE',
    },
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
    {
      onDelete: 'CASCADE',
    },
  )
  formSections: FormSection[];

  @OneToMany(
    type => OrganisationUnitCompleteness,
    organisationUnitCompleteness => organisationUnitCompleteness.form,
  )
  organisationunitcompletenesss: OrganisationUnitCompleteness[];

  @OneToMany(
    type => Record,
    record => record.form,
    {
      onDelete: 'CASCADE',
    },
  )
  records: Record[];

  @ManyToMany(
    type => Field,
    field => field.forms,
    {
      nullable: false,
    },
  )
  @JoinTable({ name: 'formuniquerecordfields' })
  fields: Field[];

  // @ManyToMany(
  //   type => User,
  //   user => user.forms,
  // )
  // users: User[];

  @OneToMany(
    () => Indicator,
    (indicator: Indicator) => indicator.form,
  )
  indicators: Indicator[];
}
