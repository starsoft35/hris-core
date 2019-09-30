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
import { TrainingCurriculums } from './hris_training_curriculums';
import { Traininginstance } from './hris_traininginstance';

@Entity('trainingmethods', { schema: 'public' })
export class TrainingMethods {
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
    name: 'name',
  })
  name: string;

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

  @ManyToMany(
    () => TrainingCurriculums,
    (TrainingCurriculums: TrainingCurriculums) =>
      TrainingCurriculums.hrisTrainingMethodss,
  )
  hrisTrainingCurriculumss: TrainingCurriculums[];

  @ManyToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.hrisTrainingMethodss,
  )
  hrisTraininginstances: Traininginstance[];
}
