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
import { Traininginstance } from './hris_traininginstance';

@Entity('trainings', { schema: 'public' })
export class Trainings {
  @Column('integer', {
    nullable: false,
    primary: true,
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
    length: 255,
    name: 'coursename',
  })
  coursename: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'trainingcategory',
  })
  trainingcategory: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'traininginstruction',
  })
  traininginstruction: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'curiculum',
  })
  curiculum: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;

  @OneToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.section,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances: Traininginstance[];
}
