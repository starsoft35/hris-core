import { Entity, Generated, OneToMany, PrimaryColumn } from 'typeorm';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Field } from './field.entity';


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
    field => field.datatype,
    {
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  )
  fields: Field[];
}
