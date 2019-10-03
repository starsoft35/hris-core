import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, ManyToMany } from 'typeorm';

import { TrainingCurriculum } from './training-curriculum.entity';
import { TrainingSession } from './training-session.entity';

@Entity('trainingmethod', { schema: 'public' })
export class TrainingMethod extends EntityCoreProps {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingmethodid',
  })
  id: number;

  @ManyToMany(
    type => TrainingCurriculum,
    trainingCurriculum => trainingCurriculum.trainingMethods,
  )
  trainingCurriculums: TrainingCurriculum[];

  @ManyToMany(
    type => TrainingSession,
    trainingSession => trainingSession.trainingMethods,
  )
  trainingSessions: TrainingSession[];
}
