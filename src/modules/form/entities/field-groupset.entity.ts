import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldGroup } from './field-group.entity';

@Entity('fieldgroupset', { schema: 'public' })
export class FieldGroupSet extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldgroupsetid',
  })
  id: number;

  @ManyToMany(type => FieldGroup, fieldGroup => fieldGroup.fieldGroupSets, {
    nullable: false,
  })
  @JoinTable({ name: 'fieldgroupsetmembers' })
  fieldGroups: FieldGroup[];
}
