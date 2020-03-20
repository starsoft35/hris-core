import { EntityCoreProps } from '../../../core/entities/entity-core-props';
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
import { TrainingInstance } from './training-instance.entity';
import { TrainingUnit } from './training-unit.entity';

@Entity('trainingcurriculum', { schema: 'public' })
export class TrainingCurriculum extends EntityCoreProps {
  static plural = 'curriculums';
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingcurriculumid',
  })
  id: number;

  @ManyToOne(
    type => TrainingSection,
    trainingSection => trainingSection.curriculums,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'sectionid' })
  section: TrainingSection | null;

  @ManyToOne(
    type => TrainingUnit,
    trainingUnit => trainingUnit.trainingCurriculums,
    { eager: true, onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'unitid' })
  unit: TrainingUnit | null;

  @Column('boolean', {
    nullable: true,
    name: 'allmethodsselected',
  })
  allMethodsSelected: boolean | null;

  @OneToMany(
    type => TrainingInstance,
    trainingInstance => trainingInstance.curriculum,
    { onDelete: 'CASCADE' },
  )
  trainingInstance: TrainingInstance[];

  @ManyToMany(
    type => TrainingMethod,
    trainingMethod => trainingMethod.trainingCurriculums,
    { nullable: false },
  )
  @JoinTable({ name: 'trainingcurriculummethodmember' })
  trainingMethods: TrainingMethod[];
}
