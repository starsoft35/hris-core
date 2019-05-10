import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';

import { FieldOptionGroup } from './field-option-group.entity';

@Entity('fieldoptiongroupset', { schema: 'public' })
export class FieldOptionGroupSet extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fieldoptiongroupsetid',
  })
  id: number;

  @ManyToMany(
    type => FieldOptionGroup,
    fieldOptionGroup => fieldOptionGroup.fieldOptionGroupSets,
    { nullable: false },
  )
  @JoinTable({ name: 'fieldoptiongroupsetmembers' })
  fieldOptionGroups: FieldOptionGroup[];
}
