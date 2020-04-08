import { Record } from 'src/modules/record/entities/record.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { TrainingSession } from './training-session.entity';

@Entity('sessionparticipant', { schema: 'public' })
export class SessionParticipant {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

  // @Column('integer', {
  //   nullable: false,
  //   name: 'sessionid',
  // })
  // sessionid: number;

  // @Column('integer', {
  //   nullable: false,
  //   name: 'recordid',
  // })
  // recordid: number;

  @OneToOne(
    type => Record,
    record => record.participants, {eager: true}
  )
  @JoinColumn({ name: 'recordid' })
  recordid: Record[];

  @ManyToOne(
    type => TrainingSession,
    trainingSessions => trainingSessions.participants,
  )
  @JoinColumn({ name: 'sessionid' })
  sessionid: TrainingSession[];
}
