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
import { TrainingUnits } from './hris_training_units';
import { Traininginstance } from './hris_traininginstance';
import { TrainingMethods } from './hris_training_methods';

@Entity('trainingcurriculums', { schema: 'public' })
@Index('idx_bf909a70d823e37a', ['section'])
@Index('idx_bf909a70f8bd700d', ['unit'])
export class TrainingCurriculums {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => TrainingSections,
    (trainingsections: TrainingSections) =>
      trainingsections.hrisTrainingCurriculumss,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'section_id' })
  section: TrainingSections | null;

  @ManyToOne(
    () => TrainingUnits,
    (trainingunits: TrainingUnits) =>
      trainingunits.hrisTrainingCurriculumss,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unit_id' })
  unit: TrainingUnits | null;

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

  @Column('boolean', {
    nullable: true,
    name: 'all_methods_selected',
  })
  all_methods_selected: boolean | null;

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
      Traininginstance.curriculum,
    { onDelete: 'CASCADE' },
  )
  hrisTraininginstances: Traininginstance[];

  @ManyToMany(
    () => TrainingMethods,
    (TrainingMethods: TrainingMethods) =>
      TrainingMethods.hrisTrainingCurriculumss,
    { nullable: false },
  )
  @JoinTable({ name: 'curriculummethodsmembers' })
  hrisTrainingMethodss: TrainingMethods[];
}
