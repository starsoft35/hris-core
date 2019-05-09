import {BaseEntity,Column,Entity,Index,JoinColumn,JoinTable,ManyToMany,ManyToOne,OneToMany,OneToOne,PrimaryColumn,PrimaryGeneratedColumn,RelationId} from "typeorm";
import { User} from "../../modules/user/entities/user.entity";
import {hris_message} from "./hris_message";
import {hris_message_thread_metadata} from "./hris_message_thread_metadata";


@Entity('hris_message_thread', { schema: 'public' })
@Index('idx_9dc9eac1f0b5af0b', ['createdby_'])
@Index('uniq_9dc9eac1539b0606', ['uid'], { unique: true })
export class hris_message_thread {
  @Column('integer', {
    nullable: false,
    primary: true,
    name: 'id',
  })
  id: number;

  @ManyToOne(type => User, User => User.hris_message_threads, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'createdby_id' })
  createdby_: User | null;

  @Column('character varying', {
    nullable: false,
    length: 255,
    name: 'subject',
  })
  subject: string;

  @Column('timestamp without time zone', {
    nullable: false,
    name: 'createdat',
  })
  createdat: Date;

  @Column('boolean', {
    nullable: false,
    name: 'isspam',
  })
  isspam: boolean;

  @Column('character varying', {
    nullable: false,
    length: 13,
    name: 'uid',
  })
  uid: string;

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

  @OneToMany(type => hris_message, hris_message => hris_message.thread_, {
    onDelete: 'CASCADE',
  })
  hris_messages: hris_message[];

  @OneToMany(
    type => hris_message_thread_metadata,
    hris_message_thread_metadata => hris_message_thread_metadata.thread_,
    { onDelete: 'CASCADE' },
  )
  hris_message_thread_metadatas: hris_message_thread_metadata[];
}
