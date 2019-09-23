import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { FieldOptionMerge } from './field-option-merge.entity';
import { Field } from '../../field/entities/field.entity';
import { FieldOptionGroup } from './field-option-group.entity';

@Entity('fieldoption', { schema: 'public' })
export class FieldOption extends EntityCoreProps {

  static plural = 'fieldOptions';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldoptionid',
  })
  id: number;

  @ManyToOne(type => Field, field => field.fieldOptions, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'value',
  })
  value: string;

  @Column('boolean', {
    nullable: true,
    name: 'skipinreport',
  })
  skipInReport: boolean | null;

  @Column('integer', {
    nullable: true,
    name: 'sort',
  })
  sort: number | null;

  @Column('boolean', {
    nullable: true,
    name: 'hastraining',
  })
  hasTraining: boolean | null;

  @OneToMany(
    type => FieldOptionMerge,
    fieldOptionMerge => fieldOptionMerge.mergedFieldOption,
    { onDelete: 'CASCADE' },
  )
  fieldOptionMerges: FieldOptionMerge[];

  @ManyToMany(
    type => FieldOptionGroup,
    fieldOptionGroup => fieldOptionGroup.fieldOptions,
  )
  fieldOptionGroups: FieldOptionGroup[];
}
