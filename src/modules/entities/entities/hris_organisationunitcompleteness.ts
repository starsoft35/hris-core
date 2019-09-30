import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Organisationunit } from './hris_organisationunit';
import { Form } from './hris_form';

@Entity('organisationunitcompleteness', { schema: 'public' })
@Index('idx_e57d91715ff69b7d', ['form'])
@Index(
  'unique_organisationunit_formcompleteness_idx',
  ['form', 'organisationunit'],
  { unique: true },
)
@Index('idx_e57d917183954d93', ['organisationunit'])
@Index('uniq_e57d9171539b0606', ['uid'], { unique: true })
export class Organisationunitcompleteness {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Organisationunit,
    (Organisationunit: Organisationunit) =>
      Organisationunit.hrisOrganisationunitcompletenesss,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'organisationunitid' })
  organisationunit: Organisationunit | null;

  @ManyToOne(
    () => Form,
    (Form: Form) => Form.hrisOrganisationunitcompletenesss,
    { nullable: false },
  )
  @JoinColumn({ name: 'formid' })
  form: Form | null;

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
  datecreated: Date;

  @Column('timestamp without time zone', {
    nullable: true,
    default: () => 'NULL::timestamp without time zone',
    name: 'lastupdated',
  })
  lastupdated: Date | null;
}
