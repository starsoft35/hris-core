import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';

import { FieldOption } from '../../field-option/entities/field-option.entity';
import { Field } from '../../field/entities/field.entity';
import { FieldOptionGroupSet } from '../../field-option-group-set/entities/field-option-group-set.entity';

@Entity('fieldoptiongroup', { schema: 'public' })
export class FieldOptionGroup extends EntityCoreProps {
  static plural = 'fieldOptionGroups';

  @ManyToOne(type => Field, field => field.fieldOptionGroups, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ referencedColumnName: 'uid' })
  field: Field | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 64,
    default: () => 'NULL::varchar',
  })
  operator: string;

  /**
   * Many To Many Relationship: FieldOptionGroup and FieldOption Entities
   */
  @ManyToMany(
    type => FieldOption,
    fieldOption => fieldOption.fieldOptionGroups,
    {
      nullable: false,
      cascade: true,
      eager: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinTable({
    name: 'fieldoptiongroupmembers',
    joinColumn: { referencedColumnName: 'uid' },
    inverseJoinColumn: { referencedColumnName: 'uid' },
  })
  fieldOptions: FieldOption[];

  /**
   * Many To Many Relationship: FieldOptionGroup and FieldOptionGroupSet Entities
   */
  @ManyToMany(
    type => FieldOptionGroupSet,
    fieldOptionGroupSet => fieldOptionGroupSet.fieldOptionGroups,
    { nullable: false, onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  fieldOptionGroupSets: FieldOptionGroupSet[];
}
