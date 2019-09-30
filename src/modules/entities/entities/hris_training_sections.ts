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
import { TrainingUnits } from './hris_training_units';
import { Traininginstance } from './hris_traininginstance';

@Entity('trainingsections', { schema: 'public' })
export class TrainingSections {
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

  @OneToMany(
    () => TrainingCurriculums,
    (TrainingCurriculums: TrainingCurriculums) =>
      TrainingCurriculums.section,
    { onDelete: 'CASCADE' },
  )
  hrisTrainingCurriculumss: TrainingCurriculums[];

  @OneToMany(
    () => TrainingUnits,
    (TrainingUnits: TrainingUnits) => TrainingUnits.section,
    { onDelete: 'CASCADE' },
  )
  hrisTrainingUnitss: TrainingUnits[];

  @OneToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.section,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances: Traininginstance[];
}
