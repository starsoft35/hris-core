import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
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
import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { RecordValue } from '../../record/entities/record-value.entity';

@Entity('field', { schema: 'public' })
export class Field extends EntityCoreProps {
  static plural = 'fields';

  @Column({ type: 'varchar', length: 64 })
  caption: string;

  @Column({ type: 'boolean', nullable: true })
  compulsory: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'isunique' })
  isUnique: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'iscalculated' })
  isCalculated: boolean | null;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'text', nullable: true, name: 'calculatedexpression' })
  calculatedExpression: string | null;

  @Column({ type: 'boolean', nullable: true, name: 'hashistory' })
  hasHistory: boolean | null;

  @Column({
    type: 'boolean',
    nullable: false,
    default: false,
    name: 'hasoptions',
  })
  hasOptions: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'hastarget' })
  hasTarget: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'showinlist' })
  showInList: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'fieldrelation' })
  fieldRelation: boolean | null;

  @Column({ type: 'boolean', nullable: true, name: 'skipinreport' })
  skipInReport: boolean | null;

  /**
   * Many To Many Relationship: Field and FieldGroup
   */
  @ManyToMany(
    type => FieldGroup,
    fieldGroup => fieldGroup.fields,
    {
      eager: true,
      cascade: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  fieldgroups: FieldGroup[];

  /**
   * Many To One Relationship: Field and FieldGroup
   */
  @ManyToOne(
    type => FieldDataType,
    fieldDataType => fieldDataType.fields,
    {
      cascade: true,
      eager: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'id' })
  datatype: FieldDataType;

  @OneToMany(
    type => FieldRelation,
    fieldRelation => fieldRelation.childfield,
    {
      onDelete: 'CASCADE',
    },
  )
  childfieldrelations: FieldRelation[];

  @OneToMany(
    type => FieldRelation,
    fieldRelation => fieldRelation.parentField,
    { onDelete: 'CASCADE' },
  )
  parentfieldrelations: FieldRelation[];

  /**
   * One To Many Relationship: Field and FieldOption
   */
  @OneToMany(
    type => FieldOption,
    fieldOption => fieldOption.field,
    {
      cascade: true,
      eager: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  fieldoptions: FieldOption[];

  /**
   * Many To One Relationship: Field and FieldInputType
   */

  @ManyToOne(
    type => FieldInputType,
    fieldInputType => fieldInputType.fields,
    {
      cascade: true,
      eager: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'id' })
  fieldinputtype: FieldInputType;

  @OneToMany(
    type => FieldOptionGroup,
    fieldOptionGroup => fieldOptionGroup.field,
    { onDelete: 'CASCADE' },
  )
  fieldoptiongroups: FieldOptionGroup[];

  @OneToMany(
    type => FieldOptionMerge,
    fieldOptionMerge => fieldOptionMerge.field,
    { onDelete: 'CASCADE' },
  )
  fieldoptionmerges: FieldOptionMerge[];

  @OneToMany(
    type => FormFieldMember,
    formFieldMember => formFieldMember.field,
    { onDelete: 'CASCADE' },
  )
  formfieldmembers: FormFieldMember[];

  @OneToMany(
    type => FormVisibleField,
    formVisibleField => formVisibleField.field,
    { onDelete: 'CASCADE' },
  )
  formvisiblefields: FormVisibleField[];

  @OneToMany(
    type => FormSectionFieldMember,
    formSectionFieldMember => formSectionFieldMember.field,
    { onDelete: 'CASCADE' },
  )
  formsectionfieldmembers: FormSectionFieldMember[];

  @ManyToMany(
    type => Form,
    form => form.fields,
  )
  forms: Form[];

  @OneToOne(
    type => RecordValue,
    recordValue => recordValue.field,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'recordvalueid' })
  recordvalue: RecordValue | null;
}
