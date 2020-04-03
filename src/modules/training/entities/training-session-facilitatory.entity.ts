import { Column, Entity } from 'typeorm';

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
}
