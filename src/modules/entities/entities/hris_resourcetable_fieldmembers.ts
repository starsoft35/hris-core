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
import { Resourcetable } from './hris_resourcetable';
import { Field } from './hris_field';

@Entity('Resourcetable_fieldmembers', { schema: 'public' })
@Index('idx_f68dc8b7443707b0', ['field'])
@Index('idx_f68dc8b7c5172ec9', ['resourcetable'])
export class ResourcetableFieldmembers {
  @ManyToOne(
    () => Resourcetable,
    (Resourcetable: Resourcetable) =>
      Resourcetable.hrisResourcetableFieldmemberss,
    { primary: true, nullable: false, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'resourcetableid' })
  resourcetable: Resourcetable | null;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisResourcetableFieldmemberss,
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
