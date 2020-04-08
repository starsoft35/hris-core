import { Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { TrainingSession } from './training-session.entity';
import { Record } from 'src/modules/record/entities/record.entity';

@Entity('sessionfacilitator', { schema: 'public' })
export class SessionFacilitator {
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


  @OneToOne(type => Record, record => record.facilitators, {eager: true})
  @JoinColumn({name: 'recordid'})
  recordid: Record[]

  @ManyToOne(
    type => TrainingSession, trainingSessions => trainingSessions.facilitators
  )
  @JoinColumn({name: 'sessionid'})
  sessionid: TrainingSession[]
}
