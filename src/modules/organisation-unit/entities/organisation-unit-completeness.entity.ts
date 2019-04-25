import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

import { OrganisationUnit } from './organisation-unit.entity';

@Entity('organisationunitcompleteness', { schema: 'public' })
@Index('idx_e57d917183954d93', ['organisationUnitId'])
@Index('uniq_e57d9171539b0606', ['uid'], { unique: true })
export class OrganisationUnitCompleteness {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

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

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('integer', {
    nullable: true,
    name: 'expectation',
  })
  expectation: number | null;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'datecreated',
  })
  dateCreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastUpdated: Date | null;
}
