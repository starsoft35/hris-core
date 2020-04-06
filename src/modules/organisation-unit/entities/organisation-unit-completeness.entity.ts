import { EntityCoreProps } from '../../../core/entities/entity-core-props';
import { Form } from '../../../modules/form/entities/form.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { OrganisationUnit } from './organisation-unit.entity';

@Entity('organisationunitcompleteness', { schema: 'public' })
export class OrganisationUnitCompleteness extends EntityCoreProps {

  static plural = 'organisationUnitCompletenesses';

  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.organisationunitcompletenesses,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnitId: OrganisationUnit;

  @ManyToOne(type => Form, form => form.organisationunitcompletenesss, {
    nullable: false,
  })
  @JoinColumn({ name: 'formid' })
  form: Form | null;

  @Column('integer', {
    nullable: true,
    name: 'expectation',
  })
  expectation: number | null;
}
