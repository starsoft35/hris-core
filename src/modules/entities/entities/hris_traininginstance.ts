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
import { Trainings } from './hris_trainings';
import { Organisationunit } from './hris_organisationunit';
import { TrainingSponsors } from './hris_training_sponsors';
import { TrainingUnits } from './hris_training_units';
import { TrainingCurriculums } from './hris_training_curriculums';
import { RecordTraining } from './hris_record_training';
import { TrainingMethods } from './hris_training_methods';

@Entity('traininginstance', { schema: 'public' })
@Index('idx_1f9a830f5aea4428', ['curriculum'])
@Index('idx_1f9a830f31c15487', ['district'])
@Index('idx_1f9a830f96054afc', ['organiser'])
@Index('idx_1f9a830ff62f176', ['region'])
@Index('idx_1f9a830fd823e37a', ['section'])
@Index('idx_1f9a830f818cc9d4', ['sponsor'])
@Index('idx_1f9a830ff8bd700d', ['unit'])
export class Traininginstance {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => TrainingSections,
    (TrainingSections: TrainingSections) =>
      TrainingSections.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: TrainingSections | null;

  @ManyToOne(
    () => Trainings,
    (Trainings: Trainings) => Trainings.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: Trainings | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisTraininginstances2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'region' })
  region: Organisationunit | null;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'district' })
  district: Organisationunit | null;

  @Column('character varying', {
    nullable: true,
    length: 100,
    name: 'venue',
  })
  venue: string | null;

  @ManyToOne(
    () => TrainingSponsors,
    (TrainingSponsors: TrainingSponsors) =>
      TrainingSponsors.hrisTraininginstances2,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sponsor' })
  sponsor: TrainingSponsors | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'startdate',
  })
  startdate: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'enddate',
  })
  enddate: Date | null;

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

  @ManyToOne(
    () => TrainingUnits,
    (TrainingUnits: TrainingUnits) =>
      TrainingUnits.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unitid' })
  unit: TrainingUnits | null;

  @ManyToOne(
    () => TrainingCurriculums,
    (TrainingCurriculums: TrainingCurriculums) =>
      TrainingCurriculums.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'curriculumid' })
  curriculum: TrainingCurriculums | null;

  @ManyToOne(
    () => TrainingSponsors,
    (TrainingSponsors: TrainingSponsors) =>
      TrainingSponsors.hrisTraininginstances,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organiser' })
  organiser: TrainingSponsors | null;

  @Column('character varying', {
    nullable: true,
    length: 100,
    default: () => 'NULL::character varying',
    name: 'createdby',
  })
  createdby: string | null;

  @Column('integer', {
    nullable: true,
    name: 'trainingid',
  })
  trainingid: number | null;

  @OneToMany(
    () => RecordTraining,
    (RecordTraining: RecordTraining) =>
      RecordTraining.trainingsession,
  )
  hrisRecordTrainings: RecordTraining[];

  @ManyToMany(
    () => TrainingMethods,
    (TrainingMethods: TrainingMethods) =>
      TrainingMethods.hrisTraininginstances,
    { nullable: false },
  )
  @JoinTable({ name: 'traininginstancemethods' })
  hrisTrainingMethodss: TrainingMethods[];
}
