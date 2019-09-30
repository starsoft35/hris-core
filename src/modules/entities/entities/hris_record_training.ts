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
import { Traininginstance } from './hris_traininginstance';

@Entity('recordtraining', { schema: 'public' })
@Index('idx_f3e7ab184dfd750c', ['record'])
@Index('unique_recordtraining_idx', ['record', 'trainingsession'], {
  unique: true,
})
@Index('uniq_f3e7ab18539b0606', ['uid'], { unique: true })
export class RecordTraining {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(
    () => Record,
    (Record: Record) => Record.hrisRecordTrainings,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'recordid' })
  record: Record | null;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'coursename',
  })
  coursename: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'courselocation',
  })
  courselocation: string;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'sponsor',
  })
  sponsor: string;

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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

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

  @ManyToOne(
    () => Traininginstance,
    (Traininginstance: Traininginstance) =>
      Traininginstance.hrisRecordTrainings,
    {},
  )
  @JoinColumn({ name: 'trainingsessionid' })
  trainingsession: Traininginstance | null;
}
