import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldGroupSet } from './field-groupset.entity';
import { Field } from './field.entity';

@Entity('fieldgroup', { schema: 'public' })
export class FieldGroup extends IdentifiableObject {
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
