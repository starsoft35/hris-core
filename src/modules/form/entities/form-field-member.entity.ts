import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { Field } from './field.entity';
import { Form } from './form.entity';
import { HRISBaseEntity } from '../../../core/entities/base-entity';

@Entity('formfieldmember', { schema: 'public' })
export class FormFieldMember extends HRISBaseEntity {
  static plural = 'formFieldMembers';

  @ManyToOne(
    type => Form,
    form => form.formFieldMembers,
    {
      primary: true,
      nullable: false,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @ManyToOne(
    type => Field,
    field => field.formfieldmembers,
    {
      primary: true,
      nullable: false,
      eager: true,
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column({
    type: 'integer',
    nullable: false,
    name: 'sort',
  })
  sort: number;

  @Column({ type: 'boolean', nullable: false, name: 'compulsory' })
  compulsory: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
    name: 'ispinned',
  })
  isPinned: boolean;

  @Column({
    type: 'boolean',
    nullable: false,
    name: 'showinprofile',
  })
  showInProfile: boolean;

  @Column({ type: 'boolean', nullable: true, name: 'showinlist' })
  showInList: boolean | null;
}
