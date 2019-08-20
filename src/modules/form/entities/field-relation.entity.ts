import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from './field.entity';
import { HRISBaseEntity } from 'src/core/entities/base-entity';

@Entity('fieldrelation', { schema: 'public' })
export class FieldRelation extends HRISBaseEntity{

  static plural = 'fieldRelations';

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
