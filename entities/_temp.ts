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

@Entity('_temp', { schema: 'public' })
export class _temp {
  @Column('integer', {
    nullable: true,
    name: 'sn',
  })
  sn: number | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'formula',
  })
  formula: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'title',
  })
  title: string | null;

  @Column('double precision', {
    nullable: true,
    precision: 53,
    name: 'total',
  })
  total: number | null;
}
