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
import { Record } from './hris_record';
import { LeaveType } from './hris_leave_type';
import { LeaveRelative } from './hris_leave_relative';

@Entity('leave', { schema: 'public' })
@Index('idx_4d817b688313f474', ['leaveType'])
@Index('unique_leave_idx', ['leaveType', 'record', 'startdate'], {
  unique: true,
})
@Index('idx_4d817b684dfd750c', ['record'])
export class Leave {
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

  @ManyToOne(() => Record, (Record: Record) => Record.hrisLeaves, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @ManyToOne(() => LeaveType, (LeaveType: LeaveType) => LeaveType.hrisLeaves, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'leavetypeid' })
  leaveType: LeaveType | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'username',
  })
  username: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'startdate',
  })
  startdate: Date;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'enddate',
  })
  enddate: Date;

  @Column('integer', {
    nullable: false,
    name: 'duration',
  })
  duration: number;

  @Column('integer', {
    nullable: false,
    name: 'amount',
  })
  amount: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'leave_benefit_applicable',
  })
  leave_benefit_applicable: string;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'leave_benefit_status',
  })
  leave_benefit_status: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'phone',
  })
  phone: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'address',
  })
  address: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'email',
  })
  email: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'leave_destination',
  })
  leave_destination: string;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'reason',
  })
  reason: string | null;

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

  @OneToMany(
    () => LeaveRelative,
    (LeaveRelative: LeaveRelative) => LeaveRelative.leave,
    { onDelete: 'CASCADE' },
  )
  hrisLeaveRelatives: LeaveRelative[];
}
