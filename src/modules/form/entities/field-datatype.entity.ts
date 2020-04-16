import { Column, Entity, OneToMany, PrimaryColumn, Generated } from 'typeorm';

import { Field } from './field.entity';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';

@Entity('fielddatatype', { schema: 'public' })
export class FieldDataType extends EntityCoreProps {
  static plural = 'fieldDataTypes';

  /**
   * One To Many Relationship: FieldDataType and Field
   */
  @PrimaryColumn({ select: false })
    @Generated('increment')
    id: number;
  
  @OneToMany(
    type => Field,
    field => field.dataType,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  fields: Field[];
}
