import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Column, Entity, OneToMany } from 'typeorm';

import { TrainingCurriculum } from './training-curriculum.entity';
import { TrainingSession } from './training-session.entity';
import { TrainingUnit } from './training-unit.entity';

@Entity('trainingsections', { schema: 'public' })
export class TrainingSection extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @OneToMany(
    type => TrainingCurriculum,
    trainingCurriculum => trainingCurriculum.section,
    { onDelete: 'CASCADE' },
  )
  curriculums: TrainingCurriculum[];

  @OneToMany(type => TrainingUnit, trainingUnit => trainingUnit.section, {
    onDelete: 'CASCADE',
  })
  trainingUnits: TrainingUnit[];

  @OneToMany(
    type => TrainingSession,
    trainingSession => trainingSession.section,
    { onDelete: 'CASCADE' },
  )
  trainingSessions: TrainingSession[];
}