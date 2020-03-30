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
import { TrainingMethod } from './training-method.entity';
import { TrainingSection } from './training-section.entity';
import { TrainingSponsor } from './training-sponsor.entity';
import { TrainingUnit } from './training-unit.entity';
import { TrainingVenue } from './training-venue.entity';
import { Record } from '../../record/entities/record.entity';

@Entity('trainingsession', { schema: 'public' })
export class TrainingSession extends EntityCoreProps {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingsessionid',
  })
  id: number;

  @ManyToOne(
    type => TrainingSection,
    trainingSection => trainingSection.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: TrainingSection | null;

  @ManyToOne(
    type => OrganisationUnit,
    organisationunit => organisationunit.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnit: OrganisationUnit | null;

  @ManyToOne(
    type => TrainingVenue,
    trainingVenue => trainingVenue.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'venueid' })
  venue: TrainingVenue | null;

  @ManyToOne(
    type => TrainingSponsor,
    trainingSponsor => trainingSponsor.sponsorTrainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sponsorid' })
  sponsor: TrainingSponsor | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'startdate',
  })
  startDate: Date | null;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'enddate',
  })
  endDate: Date | null;

  @ManyToOne(
    type => TrainingUnit,
    trainingUnits => trainingUnits.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unitid' })
  unit: TrainingUnit | null;

  @ManyToOne(
    type => TrainingCurriculum,
    trainingCurriculum => trainingCurriculum.trainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'curriculumid' })
  curriculum: TrainingCurriculum | null;

  @ManyToOne(
    type => TrainingSponsor,
    trainingSponsor => trainingSponsor.organiserTrainingSessions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organiserid' })
  organiser: TrainingSponsor | null;

  @ManyToMany(
    type => TrainingMethod,
    trainingMethod => trainingMethod.trainingSessions,
    { nullable: false },
  )
  @JoinTable({ name: 'trainingsessionmethods' })
  trainingMethods: TrainingMethod[];

  @ManyToMany(
    type => Record,
    record => record.trainingSessions,
    { nullable: false },
  )
  @JoinTable({ name: 'recordtrainingsession' })
  records: Record[];
}