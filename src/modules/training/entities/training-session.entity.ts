import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { OrganisationUnit } from '../../organisation-unit/entities/organisation-unit.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TrainingCurriculum } from './training-curriculum.entity';
import { TrainingTopic } from './training-topic.entity';
import { TrainingSection } from './training-section.entity';
import { TrainingSponsor } from './training-sponsor.entity';
import { TrainingUnit } from './training-unit.entity';
import { TrainingVenue } from './training-venue.entity';
import { Record } from '../../record/entities/record.entity';
import { TransactionTimestamp } from '../../../core/entities/transaction-timestamp.entity';
import { SessionFacilitator } from './training-session-facilitatory.entity';
import { SessionParticipant } from './training-session-participant.entity';
@Entity('trainingsession', { schema: 'public' })
export class TrainingSession extends TransactionTimestamp {
  static plural = 'sessions';
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;
  @ManyToOne(
    () => TrainingSection,
    (trainingsections: TrainingSection) => trainingsections.trainingsessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: TrainingSection | null
  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;
  @ManyToOne(
    () => OrganisationUnit,
    (OrganisationUnit: OrganisationUnit) => OrganisationUnit.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'region' })
  region: OrganisationUnit | null;
  @ManyToOne(
    () => OrganisationUnit,
    (OrganisationUnit: OrganisationUnit) => OrganisationUnit.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'district' })
  district: OrganisationUnit | null;
  @Column('character varying', {
    nullable: true,
    length: 100,
    name: 'venue',
  })
  venue: string | null;
  @ManyToOne(
    () => TrainingSponsor,
    (TrainingSponsor: TrainingSponsor) => TrainingSponsor.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sponsor' })
  sponsor: TrainingSponsor | null;
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
    name: 'created',
  })
  created: Date;
  // @Column('timestamp without time zone', {
  //   nullable: true,
  //   default: () => 'NULL::timestamp without time zone',
  //   name: 'lastupdated',
  // })
  // lastupdated: Date | null;
  @ManyToOne(
    () => TrainingUnit,
    (TrainingUnit: TrainingUnit) => TrainingUnit.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unitid' })
  unit: TrainingUnit | null;
  @ManyToOne(
    () => TrainingCurriculum,
    (TrainingCurriculum: TrainingCurriculum) =>
      TrainingCurriculum.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'curriculumid' })
  curriculum: TrainingCurriculum | null;
  @ManyToOne(
    () => TrainingSponsor,
    (TrainingSponsor: TrainingSponsor) => TrainingSponsor.trainingSessions,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organiser' })
  organiser: TrainingSponsor | null;
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
  @Column('character varying', {
    nullable: true,
    length: 20,
    name: 'deliverymode',
  })
  deliverymode: string | null;
  @Column('character varying', {
    nullable: true,
    length: 256,
    name: 'name',
  })
  name: string | null;
  @Column('text', {
    nullable: true,
    name: 'venuename',
  })
  venuename: string | null;
  @ManyToMany(
    () => TrainingTopic,
    (TrainingMethod: TrainingTopic) => TrainingMethod.trainingSessions,
    { nullable: false },
  )
  @JoinTable({ name: 'traininginstancetopic' })
  trainingtopics: TrainingTopic[];

  @ManyToMany(
    type => Record,
    record => record.trainingSessions,
  )
  @JoinTable({ name: 'sessionparticipant' })
  participants: Record[];


  @ManyToMany(
    type => Record,
    record => record.trainingSessions,
  )
  @JoinTable({ name: 'sessionfacilitators' })
  facilitators: Record[];
}
