import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, ManyToMany } from 'typeorm';

import { TrainingCurriculum } from './training-curriculum.entity';
import { TrainingInstance } from './training-instance.entity';

@Entity('trainingmethod', { schema: 'public' })
export class TrainingMethod extends EntityCoreProps {
  static plural = 'methods';
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
    type => TrainingInstance,
    trainingInstance => trainingInstance.trainingMethods,
  )
  trainingInstances: TrainingInstance[];
}
