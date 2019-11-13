import { Column, Entity, OneToMany } from 'typeorm';

import { Field } from '../../field/entities/field.entity';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';

@Entity('fielddatatype', { schema: 'public' })
export class FieldDataType extends EntityCoreProps {
  static plural = 'fieldDataTypes';

  /**
   * One To Many Relationship: FieldDataType and Field
   */
  @OneToMany(type => Field, field => field.dataType, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  fields: Field[];
}
