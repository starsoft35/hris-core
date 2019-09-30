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
import { TrainingSections } from './hris_training_sections';
import { TrainingCurriculums } from './hris_training_curriculums';
import { Traininginstance } from './hris_traininginstance';

@Entity('trainingunits', { schema: 'public' })
@Index('idx_9da4c569d823e37a', ['section'])
export class TrainingUnits {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => TrainingSections,
    (TrainingSections: TrainingSections) =>
      TrainingSections.hrisTrainingUnitss,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'section_id' })
  section: TrainingSections | null;

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
      TrainingCurriculums.unit,
    { onDelete: 'CASCADE' },
  )
  hrisTrainingCurriculumss: TrainingCurriculums[];

  @OneToMany(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.unit,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances: Traininginstance[];
}
