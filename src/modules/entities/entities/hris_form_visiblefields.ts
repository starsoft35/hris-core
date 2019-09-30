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

@Entity('formvisiblefields', { schema: 'public' })
@Index('idx_d9e6e817443707b0', ['field'])
@Index('idx_d9e6e8175ff69b7d', ['form'])
export class FormVisiblefields {
  @ManyToOne(
    () => Form,
    (Form: Form) => Form.hrisFormVisiblefieldss,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFormVisiblefieldss,
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
