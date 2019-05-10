import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from './field.entity';

@Entity('fieldrelation', { schema: 'public' })
export class FieldRelation {
  @ManyToOne(type => Field, field => field.parentFieldRelations, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parentfield' })
  parentField: Field | null;

  @ManyToOne(type => Field, field => field.childFieldRelations, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'child_field' })
  childField: Field | null;
}
