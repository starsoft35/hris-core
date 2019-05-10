import { IdentifiableObject } from 'src/core/entities/identifiable-object';
import { Form } from 'src/modules/form/entities/form.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { OrganisationUnit } from './organisation-unit.entity';

@Entity('organisationunitcompleteness', { schema: 'public' })
export class OrganisationUnitCompleteness extends IdentifiableObject {
  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.organisationUnitCompletenesses,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnitId: OrganisationUnit;

  @ManyToOne(type => Form, form => form.organisationUnitCompletenesss, {
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
