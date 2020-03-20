import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { OrganisationUnit } from '../../organisation-unit/entities/organisation-unit.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { TrainingInstance } from './training-instance.entity';


@Entity('trainingvenue', { schema: 'public' })
export class TrainingVenue extends EntityCoreProps {
  static plural = 'venues';
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'trainingvenueid',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'venuename',
  })
  venueName: string;

  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.trainingVenues,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnit: OrganisationUnit | null;

  @OneToMany(
    type => TrainingInstance,
    trainingInstance => trainingInstance.venue,
    { onDelete: 'CASCADE' },
  )
  trainingInstance: TrainingInstance[];
}
