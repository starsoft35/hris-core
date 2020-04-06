import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { FieldGroup } from './field-group.entity';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';

@Entity('fieldgroupset', { schema: 'public' })
export class FieldGroupSet extends EntityCoreProps {
  static plural = 'fieldGroupSets';

  /**
   * Many To Many Relationship: FieldGroupSet and FieldGroup Entities
   */
  @ManyToMany(
    type => FieldGroup,
    fieldGroup => fieldGroup.fieldgroupsets,
    {
      nullable: false,
      cascade: true,
      eager: true,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinTable({
    name: 'fieldgroupsetmembers',
    joinColumn: { referencedColumnName: 'id' },
    inverseJoinColumn: { referencedColumnName: 'id' },
  })
  fieldgroups: FieldGroup[];
}
