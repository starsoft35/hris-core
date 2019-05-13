import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { TrainingMethod } from './training-method.entity';
import { TrainingSection } from './training-section.entity';
import { TrainingSession } from './training-session.entity';
import { TrainingUnit } from './training-unit.entity';

@Entity('trainingcurriculum', { schema: 'public' })
export class TrainingCurriculum extends IdentifiableObject {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingcurriculumid',
  })
  id: number;

  @ManyToOne(
    type => TrainingSection,
    trainingSection => trainingSection.curriculums,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: TrainingSection | null;

  @ManyToOne(
    type => TrainingUnit,
    trainingUnit => trainingUnit.trainingCurriculums,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unitid' })
  unit: TrainingUnit | null;

  @Column('boolean', {
    nullable: true,
    name: 'allmethodsselected',
  })
  allMethodsSelected: boolean | null;

  @OneToMany(
    type => TrainingSession,
    trainingSession => trainingSession.curriculum,
    { onDelete: 'CASCADE' },
  )
  trainingSessions: TrainingSession[];

  @ManyToMany(
    type => TrainingMethod,
    trainingMethod => trainingMethod.trainingCurriculums,
    { nullable: false },
  )
  @JoinTable({ name: 'trainingcurriculummethodmember' })
  trainingMethods: TrainingMethod[];
}
