import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  ManyToMany,
} from 'typeorm';

import { FieldOptionMerge } from '../../../form/entities/field-option-merge.entity';
import { Field } from '../../field/entities/field.entity';
import { FieldOptionGroup } from '../../../form/entities/field-option-group.entity';

@Entity('fieldoption', { schema: 'public' })
export class FieldOption extends EntityCoreProps {
  static plural = 'fieldOptions';

  @Column({ type: 'varchar', length: 64, nullable: true })
  value: string;

  @Column({ type: 'boolean', nullable: true })
  skipInReport: boolean;

  @Column({ type: 'int', nullable: true, name: 'sort' })
  sort: number;

  @Column({ type: 'boolean', nullable: true })
  hasTraining: boolean | null;

  /**
   * One To Many Relationship: Field and FieldOption
   */
  @ManyToOne(type => Field, field => field.fieldOptions)
  @JoinColumn({ referencedColumnName: 'uid' })
  field: Field;

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
