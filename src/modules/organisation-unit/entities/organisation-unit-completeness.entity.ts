import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { OrganisationUnit } from './organisation-unit.entity';
import { TransactionDate } from 'src/core/entities/transaction-date.entity';
import IdentifiableObject from 'src/core/entities/identifiable-object';

@Entity('organisationunitcompleteness', { schema: 'public' })
@Index('idx_e57d917183954d93', ['organisationUnitId'])
@Index('uniq_e57d9171539b0606', ['uid'], { unique: true })
export class OrganisationUnitCompleteness extends IdentifiableObject {
  @ManyToOne(
    type => OrganisationUnit,
    organisationUnit => organisationUnit.organisationUnitCompletenesses,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationUnitId: OrganisationUnit;

  // @ManyToOne(
  //   type => hris_form,
  //   hris_form => hris_form.hris_organisationunitcompletenesss,
  //   { nullable: false },
  // )
  // @JoinColumn({ name: 'form_id' })
  // form_: hris_form | null;

  @Column('integer', {
    nullable: true,
    name: 'expectation',
  })
  expectation: number | null;
}
