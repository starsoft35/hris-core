import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { FieldOption } from './field-option.entity';
import { IdentifiableObject } from 'src/core/entities/identifiable-object';

@Entity('fieldoptionchildren', { schema: 'public' })
export class FieldOptionChildren extends IdentifiableObject {

  static plural = 'fieldOptionChildren';

  @ManyToOne(type => FieldOption, fieldOption => fieldOption.id, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'parentfieldoption' })
  fieldOption: FieldOption | null;

  @ManyToOne(type => FieldOption, fieldOption => fieldOption.id, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'childfieldoption' })
  childFieldOption: FieldOption | null;
}
