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

@Entity('importexporthistory', { schema: 'public' })

export class ImportexportHistory {
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

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'session_type',
  })
  session_type: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'object',
  })
  object: string;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'status',
  })
  status: string;

  @Column('integer', {
    nullable: false,
    name: 'count',
  })
  count: number;

  @Column('character varying', {
    nullable: false,
    length: 64,
    name: 'username',
  })
  username: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'starttime',
  })
  starttime: Date;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'finishtime',
  })
  finishtime: Date;

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
