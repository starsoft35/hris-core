import { Column, Entity, OneToMany } from 'typeorm';

import { Field } from '../../../form/entities/field.entity';
import { EntityCoreProps } from '../../../../core/entities/entity-core-props';

@Entity('fieldinputtype', { schema: 'public' })
export class FieldInputType extends EntityCoreProps {
  static plural = 'fieldInputTypes';

  @Column({
    type: 'varchar',
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
  })
  htmlTag: string;

  @OneToMany(
    type => Field,
    field => field.fieldInputType,
  )
  fields: Field[];
}
