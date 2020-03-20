import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Column, Entity, OneToMany } from 'typeorm';

import { TrainingInstance } from './training-instance.entity';

@Entity('trainingsponsor', { schema: 'public' })
export class TrainingSponsor extends EntityCoreProps {
  static plural = 'sponsors';
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingsponsorid',
  })
  id: number;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'phone',
  })
  phone: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'email',
  })
  email: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    name: 'box',
  })
  box: string | null;

  @OneToMany(
    type => TrainingInstance,
    trainingInstance => trainingInstance.organiser,
    { onDelete: 'CASCADE' },
  )
  organiserTrainingInstance: TrainingInstance[];

  @OneToMany(
    type => TrainingInstance,
    trainingInstance => trainingInstance.sponsor,
    { onDelete: 'CASCADE' },
  )
  sponsorTrainingInstance: TrainingInstance[];

  @OneToMany(
    type => TrainingInstance,
    trainingInstance=> trainingInstance.trainingMethods,
  )
  trainingInstances: TrainingInstance[];
}
