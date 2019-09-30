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

@Entity('extlogentries', { schema: 'public' })
@Index('log_date_lookup_idx', ['logged_at'])
@Index('log_class_lookup_idx', ['object_class'])
@Index('log_version_lookup_idx', ['object_class', 'objectid', 'version'])
@Index('log_user_lookup_idx', ['username'])
export class ExtLogEntries {
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
    length: 8,
    name: 'action',
  })
  action: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'logged_at',
  })
  logged_at: Date;

  @Column('character varying', {
    nullable: true,
    length: 64,
    default: () => 'NULL::character varying',
    name: 'objectid',
  })
  objectid: string | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'object_class',
  })
  object_class: string;

  @Column('integer', {
    nullable: false,
    name: 'version',
  })
  version: number;

  @Column('text', {
    nullable: true,
    name: 'data',
  })
  data: string | null;

  @Column('character varying', {
    nullable: true,
    length: 255,
    default: () => 'NULL::character varying',
    name: 'username',
  })
  username: string | null;
}
