
import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { FieldGroup } from '../../maintenance/field-group/entities/field-group.entity';
import { EntityCoreProps } from 'src/core/entities/entity-core-props';

@Entity('fieldgroupset', { schema: 'public' })
export class FieldGroupSet extends EntityCoreProps {

  static plural = 'fieldGroupSets';

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
