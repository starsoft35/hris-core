import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { FieldOption } from './field-option.entity';
import { Field } from './field.entity';
import { FieldOptionGroupSet } from './field-option-groupset.entity';

@Entity('fieldoptiongroup', { schema: 'public' })
export class FieldOptionGroup extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldoptiongroupid',
  })
  id: number;

  @ManyToOne(type => Field, field => field.fieldOptionGroups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'operator',
  })
  operator: string | null;

  @ManyToMany(
    type => FieldOption,
    fieldOption => fieldOption.fieldOptionGroups,
    { nullable: false },
  )
  @JoinTable({ name: 'fieldoptiongroupmembers' })
  fieldOptions: FieldOption[];

  @ManyToMany(
    type => FieldOptionGroupSet,
    fieldOptionGroupSet => fieldOptionGroupSet.fieldOptionGroups,
    { nullable: false },
  )
  fieldOptionGroupSets: FieldOptionGroup[];
}
