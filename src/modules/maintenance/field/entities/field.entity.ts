import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { FieldDataType } from '../../../form/entities/field-datatype.entity';
import { FieldGroup } from '../../field-group/entities/field-group.entity';
import { FieldInputType } from '../../../form/entities/field-input-type.entity';
import { FieldOptionGroup } from '../../../form/entities/field-option-group.entity';
import { FieldOptionMerge } from '../../../form/entities/field-option-merge.entity';
import { FieldOption } from '../../../form/entities/field-option.entity';
import { FieldRelation } from '../../../form/entities/field-relation.entity';
import { FormFieldMember } from '../../../form/entities/form-field-member.entity';
import { FormVisibleField } from '../../../form/entities/form-visible-fields.entity';
import { Form } from '../../../form/entities/form.entity';
import { FormSectionFieldMember } from '../../../form/entities/formsection-fieldmembers.entity';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('field', { schema: 'public' })
export class Field extends EntityCoreProps {
  static plural = 'fields';

  @Column({ type: 'varchar', length: 64 })
  caption: string;

  @Column({ type: 'boolean', nullable: true })
  compulsory: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  isUnique: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  isCalculated: boolean | null;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'text', nullable: true })
  calculatedExpression: string | null;

  @Column({ type: 'boolean', nullable: true })
  hasHistory: boolean | null;

  @Column({ type: 'boolean', nullable: true })
  hasTarget: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'fieldrelation' })
  fieldRelation: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'skipinreport' })
  skipInReport: boolean | null;

  // Field and Field Group Relation
  @ManyToMany(type => FieldGroup, fieldGroup => fieldGroup.fields)
  fieldGroups: FieldGroup[];

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

  @ManyToMany(type => Form, form => form.fields)
  forms: Form[];
}
