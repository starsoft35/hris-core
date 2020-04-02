import { Column, Entity } from 'typeorm';

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
}
