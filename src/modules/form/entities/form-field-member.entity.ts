import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from '../../field/entities/field.entity';
import { Form } from './form.entity';
import { HRISBaseEntity } from 'src/core/entities/base-entity';

@Entity('formfieldmember', { schema: 'public' })
export class FormFieldMember extends HRISBaseEntity {

  static plural = 'formFieldMembers';

  @ManyToOne(type => Form, form => form.formFieldMembers, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @ManyToOne(type => Field, field => field.formFieldMembers, {
    primary: true,
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('integer', {
    nullable: false,
    name: 'sort',
  })
  sort: number;
}
