import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { FieldOption } from './field-option.entity';
import { Field } from './field.entity';

@Entity('fieldoptionmerge', { schema: 'public' })
export class FieldOptionMerge extends EntityCoreProps {
  static plural = 'fieldOptionMerges';

  /**
   * Many To One Relationship: FieldOptionMerge and Field Entities
   */
  @ManyToOne(
    type => Field,
    field => field.fieldoptionmerges,
    {
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ referencedColumnName: 'id' })
  field: Field;

  /**
   * Many To One Relationship: FieldOptionMerge and FieldOption Entities
   */
  @ManyToOne(
    type => FieldOption,
    fieldOption => fieldOption.fieldoptionmerges,
    { onUpdate: 'CASCADE', onDelete: 'CASCADE' },
  )
  @JoinColumn({ referencedColumnName: 'id' })
  mergedfieldoption: FieldOption;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  removedfieldoptionvalue: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 255,
  })
  removedfieldoptionuid: string;
}
