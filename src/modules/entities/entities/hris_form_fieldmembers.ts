import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Form } from './hris_form';
import { Field } from './hris_field';

@Entity('formfieldmembers', { schema: 'public' })
@Index('idx_c4bcec9b443707b0', ['field'])
@Index('idx_c4bcec9b5ff69b7d', ['form'])
export class FormFieldmembers {
  @ManyToOne(
    () => Form,
    (Form: Form) => Form.hrisFormFieldmemberss,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFormFieldmemberss,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('integer', {
    nullable: false,
    name: 'sort',
  })
  sort: number;
}
