import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, OneToMany } from 'typeorm';

import { Field } from '../../field/entities/field.entity';

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

  @OneToMany(type => Field, field => field.fieldInputType)
  fields: Field[];
}
