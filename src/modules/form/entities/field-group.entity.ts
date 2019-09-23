import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldGroupSet } from './field-groupset.entity';
import { Field } from '../../maintenance/field/entities/field.entity';

@Entity('fieldgroup', { schema: 'public' })
export class FieldGroup extends EntityCoreProps {

  static plural = 'fieldGroups';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldgroupid',
  })
  id: number;

  @ManyToMany(type => Field, field => field.fieldGroups, { nullable: false })
  @JoinTable({ name: 'fieldgroupmembers' })
  fields: Field[];

  @ManyToMany(type => FieldGroupSet, fieldGroupSet => fieldGroupSet.fieldGroups)
  fieldGroupSets: FieldGroupSet[];
}
