import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { Form } from './form.entity';
import { FormSectionFieldMember } from './formsection-fieldmembers.entity';

@Entity('hris_formsection', { schema: 'public' })
export class FormSection extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => Form, form => form.formSections, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @OneToMany(
    type => FormSectionFieldMember,
    formSectionFieldMembers => formSectionFieldMembers.formSection,
    { onDelete: 'CASCADE' },
  )
  formSectionFieldMembers: FormSectionFieldMember[];
}
