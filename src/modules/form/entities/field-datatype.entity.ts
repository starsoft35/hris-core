import { Column, Entity, OneToMany } from 'typeorm';

import { Field } from './field.entity';
import { IdentifiableObject } from 'src/core/entities/identifiable-object';

@Entity('fielddatatype', { schema: 'public' })
export class FieldDataType extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'fielddatatypeid',
  })
  id: number;

  @OneToMany(type => Field, field => field.dataType, { onDelete: 'CASCADE' })
  fields: Field[];
}
