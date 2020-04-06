import { Column, Entity, ManyToMany } from 'typeorm';
import { Record } from '../../../modules/record/entities/record.entity';

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
    name: 'sessionid',
  })
  sessionid: number;

  @Column('integer', {
    nullable: false,
    name: 'recordid',
  })
  recordid: number;

  @ManyToMany(type => Record, record => record.participants, {eager: true})
  record: Record[]
}
