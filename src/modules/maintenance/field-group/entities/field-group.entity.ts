import { EntityCoreProps } from '../../../../core/entities/entity-core-props';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldGroupSet } from '../../../form/entities/field-groupset.entity';
import { Field } from '../../field/entities/field.entity';

@Entity('fieldgroup', { schema: 'public' })
export class FieldGroup extends EntityCoreProps {

  static plural = 'fieldGroups';

  @ManyToMany(type => Field, field => field.fieldGroups, { nullable: false })
  @JoinTable({ name: 'fieldgroupmembers' })
  fields: Field[];

  @ManyToMany(type => FieldGroupSet, fieldGroupSet => fieldGroupSet.fieldGroups)
  fieldGroupSets: FieldGroupSet[];
}
