import { EntityCoreProps } from 'src/core/entities/entity-core-props';
import { Column, Entity, OneToMany } from 'typeorm';

import { TrainingSession } from './training-session.entity';

@Entity('trainingsponsor', { schema: 'public' })
export class TrainingSponsor extends EntityCoreProps {
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
    type => TrainingSession,
    trainingSession => trainingSession.organiser,
    { onDelete: 'CASCADE' },
  )
  organiserTrainingSessions: TrainingSession[];

  @OneToMany(
    type => TrainingSession,
    trainingSession => trainingSession.sponsor,
    { onDelete: 'CASCADE' },
  )
  sponsorTrainingSessions: TrainingSession[];
}
