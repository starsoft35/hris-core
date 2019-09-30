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
import { FieldoptionChildren } from './hris_fieldoption_children';
import { Fieldoptionmerge } from './hris_fieldoptionmerge';
import { IndicatorTargetfieldoption } from './hris_indicator_targetfieldoption';
import { LeaveType } from './hris_leave_type';
import { Fieldoptiongroup } from './hris_fieldoptiongroup';
import { Relationalfilter } from './hris_relationalfilter';

@Entity('fieldoption', { schema: 'public' })
@Index('unique_fieldoption_idx', ['field', 'value'], { unique: true })
@Index('idx_f3f75cc5443707b0', ['field'])
@Index('uniq_f3f75cc5539b0606', ['uid'], { unique: true })
export class Fieldoption {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Field,
    (Field: Field) => Field.hrisFieldoptions,
    { nullable: false, onDelete: 'CASCADE' },
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
    name: 'value',
  })
  value: string;

  @Column('boolean', {
    nullable: true,
    name: 'skipinreport',
  })
  skipinreport: boolean | null;

  @Column('text', {
    nullable: true,
    name: 'description',
  })
  description: string | null;

  @Column('integer', {
    nullable: true,
    name: 'sort',
  })
  sort: number | null;

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

  @Column('boolean', {
    nullable: true,
    name: 'hastraining',
  })
  hastraining: boolean | null;

  @OneToMany(
    () => FieldoptionChildren,
    (FieldoptionChildren: FieldoptionChildren) =>
      FieldoptionChildren.childFieldoption,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptionChildrens: FieldoptionChildren[];

  @OneToMany(
    () => FieldoptionChildren,
    (FieldoptionChildren: FieldoptionChildren) =>
      FieldoptionChildren.parentFieldoption,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptionChildrens2: FieldoptionChildren[];

  @OneToMany(
    () => Fieldoptionmerge,
    (Fieldoptionmerge: Fieldoptionmerge) =>
      Fieldoptionmerge.mergedfieldoption,
    { onDelete: 'CASCADE' },
  )
  hrisFieldoptionmerges: Fieldoptionmerge[];

  @OneToMany(
    () => IndicatorTargetfieldoption,
    (IndicatorTargetfieldoption: IndicatorTargetfieldoption) =>
      IndicatorTargetfieldoption.fieldoption,
    { onDelete: 'CASCADE' },
  )
  hrisIndicatorTargetfieldoptions: IndicatorTargetfieldoption[];

  @OneToOne(
    () => LeaveType,
    (LeaveType: LeaveType) => LeaveType.field,
    { onDelete: 'CASCADE' },
  )
  hrisLeaveType: LeaveType | null;

  @ManyToMany(
    () => Fieldoptiongroup,
    (Fieldoptiongroup: Fieldoptiongroup) =>
      Fieldoptiongroup.hrisFieldoptions,
  )
  hrisFieldoptiongroups: Fieldoptiongroup[];

  @ManyToMany(
    () => Relationalfilter,
    (Relationalfilter: Relationalfilter) =>
      Relationalfilter.hrisFieldoptions,
  )
  hrisRelationalfilters: Relationalfilter[];
}
