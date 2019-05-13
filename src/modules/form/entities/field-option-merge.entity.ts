import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { FieldOption } from './field-option.entity';
import { Field } from './field.entity';

@Entity('fieldoptionmerge', { schema: 'public' })
export class FieldOptionMerge extends IdentifiableObject {

  static plural = 'fieldOptionMerges';

  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => Field, field => field.fieldOptionMerges, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @ManyToOne(
    type => FieldOption,
    fieldOption => fieldOption.fieldOptionMerges,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'mergedfieldoptionid' })
  mergedFieldOption: FieldOption | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'removedfieldoptionvalue',
  })
  removedFieldOptionValue: string;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'removedfieldoptionuid',
  })
  removedFieldOptionUid: string;
}
