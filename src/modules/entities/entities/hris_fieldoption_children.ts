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
import { Fieldoption } from './hris_fieldoption';

@Entity('fieldoptionchildren', { schema: 'public' })
@Index('idx_4d513bb4219d1df9', ['childFieldoption'])
@Index('idx_4d513bb4903568a7', ['parentFieldoption'])
export class FieldoptionChildren {
  @ManyToOne(
    () => Fieldoption,
    (Fieldoption: Fieldoption) =>
      Fieldoption.hrisFieldoptionChildrens2,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'parent_fieldoption' })
  parentFieldoption: Fieldoption | null;

  @ManyToOne(
    () => Fieldoption,
    (Fieldoption: Fieldoption) =>
      Fieldoption.hrisFieldoptionChildrens,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'child_fieldoption' })
  childFieldoption: Fieldoption | null;
}
