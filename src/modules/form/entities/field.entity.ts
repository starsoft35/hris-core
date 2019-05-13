import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { FieldDataType } from './field-datatype.entity';
import { FieldGroup } from './field-group.entity';
import { FieldInputType } from './field-input-type.entity';
import { FieldOptionGroup } from './field-option-group.entity';
import { FieldOptionMerge } from './field-option-merge.entity';
import { FieldOption } from './field-option.entity';
import { FieldRelation } from './field-relation.entity';
import { FormFieldMember } from './form-field-member.entity';
import { FormVisibleField } from './form-visible-fields.entity';
import { Form } from './form.entity';
import { FormSectionFieldMember } from './formsection-fieldmembers.entity';
import { IdentifiableObject } from 'src/core/entities/identifiable-object';

@Entity('field', { schema: 'public' })
export class Field extends IdentifiableObject {

  static plural = 'fields';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldid',
  })
  id: number;

  @ManyToOne(type => FieldDataType, fieldDataType => fieldDataType.fields, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'datatypeid' })
  dataType: FieldDataType | null;

  @ManyToOne(type => FieldInputType, fieldInputType => fieldInputType.fields, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'inputtypeid' })
  inputType: FieldInputType | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'caption',
  })
  caption: string;

  @Column('boolean', {
    nullable: true,
    name: 'compulsory',
  })
  compulsory: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'isunique',
  })
  isUnique: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'iscalculated',
  })
  isCalculated: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('text', {
    nullable: true,
    name: 'calculatedexpression',
  })
  calculatedExpression: string | null;

  @Column('boolean', {
    nullable: true,
    name: 'hashistory',
  })
  hasHistory: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'hastarget',
  })
  hasTarget: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'fieldrelation',
  })
  fieldRelation: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'skipinreport',
  })
  skipInReport: boolean | null;

  @OneToMany(type => FieldRelation, fieldRelation => fieldRelation.childField, {
    onDelete: 'CASCADE',
  })
  childFieldRelations: FieldRelation[];

  @OneToMany(
    type => FieldRelation,
    fieldRelation => fieldRelation.parentField,
    { onDelete: 'CASCADE' },
  )
  parentFieldRelations: FieldRelation[];

  @OneToMany(type => FieldOption, fieldOption => fieldOption.field, {
    onDelete: 'CASCADE',
  })
  fieldOptions: FieldOption[];

  @OneToMany(
    type => FieldOptionGroup,
    fieldOptionGroup => fieldOptionGroup.field,
    { onDelete: 'CASCADE' },
  )
  fieldOptionGroups: FieldOptionGroup[];

  @OneToMany(
    type => FieldOptionMerge,
    fieldOptionMerge => fieldOptionMerge.field,
    { onDelete: 'CASCADE' },
  )
  fieldOptionMerges: FieldOptionMerge[];

  @OneToMany(
    type => FormFieldMember,
    formFieldMember => formFieldMember.field,
    { onDelete: 'CASCADE' },
  )
  formFieldMembers: FormFieldMember[];

  @OneToMany(
    type => FormVisibleField,
    formVisibleField => formVisibleField.field,
    { onDelete: 'CASCADE' },
  )
  formVisibleFields: FormVisibleField[];

  @OneToMany(
    type => FormSectionFieldMember,
    formSectionFieldMember => formSectionFieldMember.field,
    { onDelete: 'CASCADE' },
  )
  formSectionFieldMembers: FormSectionFieldMember[];

  @ManyToMany(type => FieldGroup, fieldGroup => fieldGroup.fields)
  fieldGroups: FieldGroup[];

  @ManyToMany(type => Form, form => form.fields)
  forms: Form[];
}
