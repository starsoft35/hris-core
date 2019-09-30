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
import { Formsection } from './hris_formsection';
import { Field } from './hris_field';

@Entity('formsectionfieldmembers', { schema: 'public' })
@Index('idx_a83a9cdd443707b0', ['field'])
@Index('idx_a83a9cdde4bffd6b', ['formsection'])
export class FormsectionFieldmembers {
  @ManyToOne(
    () => Formsection,
    (Formsection: Formsection) =>
      Formsection.hrisFormsectionFieldmemberss,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'formsectionid' })
  formsection: Formsection | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFormsectionFieldmemberss,
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
