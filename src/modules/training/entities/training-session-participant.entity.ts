import { Column, Entity, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Record } from 'src/modules/record/entities/record.entity';
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

  @Column('integer', {
    nullable: false,
    name: 'trainingSessionId',
  })
  trainingSessionId: number;

  @Column('integer', {
    nullable: false,
    name: 'recordId',
  })
  recordId: number;

  @Column('integer', {
    nullable: false,
    name: 'curriculumid',
  })
  curriculumid: number;

  @ManyToOne(
    type => Record,
    record => record.participants,
    { eager: true },
  )
  record: Record[];

  @ManyToOne(
    type => TrainingSession,
    trainingsession => trainingsession.participants,
  )
  trainingSessions: TrainingSession[];
}
