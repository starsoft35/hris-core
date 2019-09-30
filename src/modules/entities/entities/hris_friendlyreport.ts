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
import { Fieldoptiongroup } from './hris_fieldoptiongroup';
import { Friendlyreportcategory } from './hris_friendlyreportcategory';
import { Arithmeticfilter } from './hris_arithmeticfilter';
import { Relationalfilter } from './hris_relationalfilter';

@Entity('friendlyreport', { schema: 'public' })
@Index('uniq_354231795e237e06', ['name'], { unique: true })
@Index('idx_354231795278319c', ['series'])
@Index('uniq_35423179539b0606', ['uid'], { unique: true })
export class Friendlyreport {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @ManyToOne(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) =>
      Fieldoptiongroup.hrisFriendlyreports,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'seriesid' })
  series: Fieldoptiongroup | null;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('integer', {
    nullable: false,
    name: 'sort',
  })
  sort: number;

  @Column('boolean', {
    nullable: true,
    name: 'ignoreskipinreport',
  })
  ignoreskipinreport: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'usetargets',
  })
  usetargets: boolean | null;

  @Column('boolean', {
    nullable: true,
    name: 'showdeficitsurplus',
  })
  showdeficitsurplus: boolean | null;

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

  @Column('character varying', {
    nullable: true,
    length: 13,
    default: () => 'NULL::character varying',
    name: 'type',
  })
  type: string | null;

  @Column('text', {
    nullable: true,
    name: 'sql',
  })
  sql: string | null;

  @Column('text', {
    nullable: true,
    name: 'javascript',
  })
  javascript: string | null;

  @Column('text', {
    nullable: true,
    name: 'stylesheet',
  })
  stylesheet: string | null;

  @OneToMany(
    () => Friendlyreportcategory,
    (Friendlyreportcategory: Friendlyreportcategory) =>
      Friendlyreportcategory.friendlyreport,
    { onDelete: 'CASCADE' },
  )
  hrisFriendlyreportcategorys: Friendlyreportcategory[];

  @ManyToMany(
    () => Arithmeticfilter,
    (Arithmeticfilter: Arithmeticfilter) =>
      Arithmeticfilter.hrisFriendlyreports,
    { nullable: false },
  )
  @JoinTable({ name: 'friendlyreportarithmeticfilter' })
  hrisArithmeticfilters: Arithmeticfilter[];

  @ManyToMany(
    () => Relationalfilter,
    (Relationalfilter: Relationalfilter) =>
      Relationalfilter.hrisFriendlyreports,
    { nullable: false },
  )
  @JoinTable({ name: 'friendlyreportrelationalfilter' })
  hrisRelationalfilters: Relationalfilter[];
}
