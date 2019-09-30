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
import { Field } from './hris_field';
import { Fieldoption } from './hris_fieldoption';
import { Friendlyreport } from './hris_friendlyreport';

@Entity('relationalfilter', { schema: 'public' })
@Index('idx_629c17cd443707b0', ['field'])
@Index('uniq_629c17cd5e237e06', ['name'], { unique: true })
@Index('uniq_629c17cd539b0606', ['uid'], { unique: true })
export class Relationalfilter {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisRelationalfilters,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'fieldid' })
  field: Field | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'name',
  })
  name: string;

  @Column('boolean', {
    nullable: false,
    name: 'excludefieldoptions',
  })
  excludefieldoptions: boolean;

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

  @ManyToMany(
    () => Fieldoption,
    (Fieldoption: Fieldoption) =>
      Fieldoption.hrisRelationalfilters,
    { nullable: false },
  )
  @JoinTable({ name: 'hris_relationalfilter_member' })
  hrisFieldoptions: Fieldoption[];

  @ManyToMany(
    () => Friendlyreport,
    (Friendlyreport: Friendlyreport) =>
      Friendlyreport.hrisRelationalfilters,
  )
  hrisFriendlyreports: Friendlyreport[];
}
