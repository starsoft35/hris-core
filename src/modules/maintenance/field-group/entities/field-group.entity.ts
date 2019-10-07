import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldGroupSet } from '../../field-group-set/entities/field-groupset.entity';
import { Field } from '../../field/entities/field.entity';

@Entity('fieldgroup', { schema: 'public' })
export class FieldGroup extends EntityCoreProps {
  static plural = 'fieldGroups';

  /**
   * Many To Many Relationship: FieldGroup and Field Entities
   */
  @ManyToMany(type => Field, field => field.fieldGroups, { nullable: false })
  @JoinTable({
    name: 'fieldgroupmembers',
    joinColumn: { referencedColumnName: 'uid' },
    inverseJoinColumn: { referencedColumnName: 'uid' },
  })
  fields: Field[];

  /**
   * Many To Many Relationship: FieldGroup and FieldGroupSet Entities
   */
  @ManyToMany(type => FieldGroupSet, fieldGroupSet => fieldGroupSet.fieldGroups)
  fieldGroupSets: FieldGroupSet[];
}
