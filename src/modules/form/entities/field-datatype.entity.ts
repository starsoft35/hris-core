import { Column, Entity, OneToMany } from 'typeorm';

import { Field } from '../../maintenance/field/entities/field.entity';
import { EntityCoreProps } from '../../../core/entities/entity-core-props';


@Entity('fielddatatype', { schema: 'public' })
export class FieldDataType extends EntityCoreProps {

  static plural = 'fieldDataTypes';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fielddatatypeid',
  })
  id: number;

  @OneToMany(type => Field, field => field.dataType, { onDelete: 'CASCADE' })
  fields: Field[];
}
