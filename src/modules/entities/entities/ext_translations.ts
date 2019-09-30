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

@Entity('exttranslations', { schema: 'public' })
@Index(
  'lookup_unique_idx',
  ['field', 'foreign_key', 'locale', 'object_class'],
  { unique: true },
)
@Index('translations_lookup_idx', ['foreign_key', 'locale', 'object_class'])
export class ExtTranslations {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 8,
    name: 'locale',
  })
  locale: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'object_class',
  })
  object_class: string;

  @Column('character varying', {
    nullable: false,
    length: 32,
    name: 'field',
  })
  field: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'foreign_key',
  })
  foreign_key: string;

  @Column('text', {
    nullable: true,
    name: 'content',
  })
  content: string | null;
}
