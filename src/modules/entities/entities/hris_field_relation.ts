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
import { Field } from './hris_field';

@Entity('fieldrelation', { schema: 'public' })
@Index('idx_2f7ffbc98f3e7cb', ['childField'])
@Index('idx_2f7ffbc997c4d1fb', ['parentField'])
export class FieldRelation {
  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFieldRelations2,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'parent_field' })
  parentField: Field | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFieldRelations,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'child_field' })
  childField: Field | null;
}
